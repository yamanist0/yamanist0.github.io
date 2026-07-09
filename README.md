<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/yamanist0/yamanist-page">
    <img src="images/logo.png" alt="Yamanist Page Logo" width="80" height="80">
  </a>

  <h3 align="center">Yamanist Page</h3>

  <p align="center">
    A terminal-inspired personal page for GitHub projects, Discord presence, and project notes.
    <br />
    <a href="https://github.com/yamanist0/yamanist-page"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://github.com/yamanist0/yamanist-page">View Repository</a>
    &middot;
    <a href="https://github.com/yamanist0/yamanist-page/issues">Report Issue</a>
    &middot;
    <a href="https://github.com/yamanist0/yamanist-page/pulls">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1831" height="922" alt="image" src="https://github.com/user-attachments/assets/32bd4d85-6959-403c-a12e-52aeccf5799e" />


A personal portfolio website in the style of a terminal UI. Yamanist Page shows GitHub repos and Discord status, and a command-like notes panel that sends messages to a Cloudflare Worker & Discord webhook. The project includes a minimal front end, a local Node.js server for persistent state and a Cloudflare Worker to deliver the notes, and tries to be intuitive and extensible, modern, and interactive.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is built using a straightforward, modern stack that's quick to develop on and customize.

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Cloudflare Workers](https://workers.cloudflare.com/)
* [GitHub API](https://docs.github.com/en/rest)
* [Discord Lanyard API](https://discord.com/developers/docs/game-sdk/discord-activity)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

Make sure you have the following installed:
* Node.js
* npm

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yamanist0/yamanist-page.git
   ```
2. Open the project folder
   ```sh
   cd yamanist-page
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the local server
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In your browser, navigate to the local page and play around in the terminal like interface! There you'll be able to see repositories, presence, send in a note or command and much more which goes via the worker integrations. There is also an option for repoordering by admin via the commandinput.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] dynamically listing the GitHub repository
- [x] a Discord status/profile card
- [x] manually ordering repositories by admin
- [x] utilizing Cloudflare Workers
- [ ] improve animation quality and UX elements.
- [ ] add to the command system.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome. If you have an idea for a feature or a bug fix, please open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Yaman - [@yamanist0](https://github.com/yamanist0)

Project Link: [https://github.com/yamanist0/yamanist-page](https://github.com/yamanist0/yamanist-page)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks to the following resources and platforms that helped shape this project:

* [GitHub API](https://docs.github.com/en/rest)
* [Discord Lanyard API](https://github.com/Phineas/lanyard)
* [Cloudflare Workers](https://workers.cloudflare.com/)
* [Express](https://expressjs.com/)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yamanist0/yamanist0.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/yamanist0/yamanist0.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yamanist0/yamanist0.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/yamanist0/yamanist-page/network/members
[stars-shield]: https://img.shields.io/github/stars/yamanist0/yamanist0.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/yamanist0/yamanist-page/stargazers
[issues-shield]: https://img.shields.io/github/issues/yamanist0/yamanist0.github.io.svg?style=for-the-badge
[issues-url]: https://github.com/yamanist0/yamanist-page/issues
[product-screenshot]: https://placehold.co/800x400?text=Yamanist+Page
[license-shield]: https://img.shields.io/github/license/yamanist0/yamanist0.github.io.svg?style=for-the-badge
[license-url]: https://github.com/yamanist0/yamanist-page/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ahmet-yaman-alio%C4%9Flu-072822343/
[product-screenshot]: https://placehold.co/800x400?text=Yamanist+Page
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com "# yamanist0.github.io" 
