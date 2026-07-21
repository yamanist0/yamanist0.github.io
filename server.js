import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const app = express();
const port = process.env.PORT || 3000;
const dataPath = path.join(process.cwd(), 'repo-order.json');
const githubUser = 'yamanist0';
const passwordHash = '37ed68b907fbcf27dd1cd3306724276ee6afc0ea2a7321919f7ab683d15bead0';

async function loadOrder() {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    console.log("checking what is inside the file", data);
    return JSON.parse(data);
  } catch {
    return { sortKey: null, createdAt: null };
  }
}

async function saveOrder(order) {
  // save the data as a clean json file here
  await fs.writeFile(dataPath, JSON.stringify(order, null, 2), 'utf8');
}

app.use(express.json());
app.use(express.static(process.cwd()));

app.post('/api/admin/repos/order', async (req, res) => {
  const { command } = req.body || {};
  if (typeof command !== 'string') {
    return res.status(400).json({ error: 'Command is required.' });
  }

  const trimmed = command.trim();
  const match = trimmed.match(/^\/admin\s+(.+)$/);
  if (!match) {
    return res.status(400).json({ error: 'Invalid command format.' });
  }

  const password = match[1].trim();
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  if (hash !== passwordHash) {
    return res.status(403).json({ error: 'Unauthorized.' });
  }

  const githubResponse = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=pushed`);
  if (!githubResponse.ok) {
    return res.status(502).json({ error: 'Unable to fetch GitHub repos for order.' });
  }

  const repos = await githubResponse.json();
  const repoOrder = Array.isArray(repos) ? repos.map((repo) => repo.full_name) : [];

  const order = {
    sortKey: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    repoOrder,
  };

  await saveOrder(order);
  return res.json({ success: true, order });
});

app.get('/api/admin/repos/order', async (req, res) => {
  const order = await loadOrder();
  res.json(order);
});

app.post('/api/admin/repos/order/save', async (req, res) => {
  const { password, repoOrder } = req.body || {};
  if (typeof password !== 'string' || !Array.isArray(repoOrder)) {
    return res.status(400).json({ error: 'Password and repoOrder are required.' });
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex');
  if (hash !== passwordHash) {
    return res.status(403).json({ error: 'Unauthorized.' });
  }

  const order = {
    sortKey: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    repoOrder,
  };

  await saveOrder(order);
  res.json({ success: true, order });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
