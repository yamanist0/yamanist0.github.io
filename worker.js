export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '*';
    const corsHeaders = {
      'Access-Control-Allow-Origin': origin === 'null' ? '*' : origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === 'GET' && url.pathname === '/') {
      return json(200, { ok: true, message: 'Yamanist Discord worker is running.' }, corsHeaders);
    }

    if (request.method === 'GET' && url.pathname === '/avatar') {
      const userId = url.searchParams.get('userId') || '';
      const avatarHash = url.searchParams.get('avatarHash') || '';
      const isDefault = url.searchParams.get('isDefault') === '1' || url.searchParams.get('default') === '1';
      const format = url.searchParams.get('format') || 'png';
      const size = url.searchParams.get('size') || '256';

      let avatarUrl = '';
      if (isDefault) {
        const defaultIndex = Number(url.searchParams.get('index') || 0);
        avatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.${format}`;
      } else if (userId && avatarHash) {
        avatarUrl = `https://cdn.discordapp.com/avatars/${encodeURIComponent(userId)}/${encodeURIComponent(avatarHash)}.${format}?size=${encodeURIComponent(size)}`;
      } else {
        return json(400, { error: 'userId and avatarHash are required for avatar proxying.' }, corsHeaders);
      }

      try {
        const avatarResponse = await fetch(avatarUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0',
          },
        });

        if (!avatarResponse.ok) {
          return json(502, { error: 'Discord avatar fetch failed.', status: avatarResponse.status }, corsHeaders);
        }

        const contentType = avatarResponse.headers.get('content-type') || 'image/png';
        return new Response(avatarResponse.body, {
          status: 200,
          headers: {
            'content-type': contentType,
            'cache-control': 'public, max-age=3600',
            ...corsHeaders,
          },
        });
      } catch {
        return json(502, { error: 'Discord avatar fetch failed.' }, corsHeaders);
      }
    }

    if (request.method !== 'POST') {
      return json(404, { error: 'Not found.' }, corsHeaders);
    }

    if (url.pathname !== '/' && url.pathname !== '/discord') {
      return json(404, { error: 'Not found.' }, corsHeaders);
    }

    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const windowMs = Number(env.RATE_LIMIT_WINDOW_MS || 60000);
    const maxRequests = Number(env.RATE_LIMIT_MAX || 5);

    const state = globalThis.__yamanistRateLimitState ??= new Map();
    const bucketKey = `${ip}:${Math.floor(now / windowMs)}`;
    let bucket = state.get(bucketKey);

    if (!bucket || bucket.expiresAt <= now) {
      bucket = { count: 0, expiresAt: now + windowMs };
      state.set(bucketKey, bucket);
    }

    if (bucket.count >= maxRequests) {
      return json(429, { error: 'Rate limit exceeded. Please wait a moment and try again.' });
    }

    bucket.count += 1;

    try {
      const body = await request.json();
      const message = typeof body?.message === 'string' ? body.message.trim() : '';

      if (!message) {
        return json(400, { error: 'Message is required.' }, corsHeaders);
      }

      if (!env.DISCORD_WEBHOOK_URL) {
        return json(500, { error: 'DISCORD_WEBHOOK_URL is not configured.' }, corsHeaders);
      }

      const payload = {
        content: '',
        embeds: [
          {
            title: '💬 New message',
            description: message.slice(0, 2048),
            color: 0x5865f2,
            fields: [
              { name: 'Source', value: String(body?.source || 'note').slice(0, 100), inline: true },
              { name: 'Time', value: new Date().toISOString(), inline: true },
            ],
            footer: { text: 'Yamanist site' },
          },
        ],
      };

      if (typeof body?.username === 'string' && body.username.trim()) {
        payload.username = body.username.trim().slice(0, 80);
      }

      if (typeof body?.avatar_url === 'string' && body.avatar_url.trim()) {
        payload.avatar_url = body.avatar_url.trim();
      }

      const discordResponse = await fetch(env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!discordResponse.ok) {
        const text = await discordResponse.text();
console.log("Discord error:", text);
        return json(502, { error: 'Discord webhook failed.', detail: text }, corsHeaders);
      }

      return json(200, { ok: true, message: 'Delivered to Discord webhook.' }, corsHeaders);
    } catch {
      return json(400, { error: 'Invalid JSON body.' }, corsHeaders);
    }
  },
};

console.log("i hope this data is correct", data);
function json(status, data, corsHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      ...corsHeaders,
    },
  });
}
