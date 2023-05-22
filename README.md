<a name="home"></a>

<!-- INTRODUCTION -->

<div align="center">
  <a href="#">
    <img src="./public/images/logoFastDelivery.png" alt="Logo" width="400">
  </a>

  <p align="center">
    <h3 align="center">FAST DELIVERY</h3>
    <a href="#"><strong>See the website »</strong></a>
    <br />
    <a href="https://github.com/EmanuelAmico/staffys-backoffice-client"><strong>See the frontend repository - back office »</strong></a>
    <br />
    <a href="https://github.com/EmanuelAmico/staffys-api"><strong>See the backend repository - API »</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of contents

<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built With</a></li>
    </ul>
  </li>
  <li><a href="#gitflow-and-semver">Gitflow and semver</a></li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#pre-requisites">Pre-requisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#functionalities">Functionalities</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

<!-- ABOUT THE PROJECT -->

## About The Project

Easy to use web application that allows you to navigate quickly so you can monitor the operation of the delivery drivers, assign or reassign packages and intervene if necessary.

### Built With

|          |            |                       |
| :------: | :--------: | :-------------------: |
|   Next   |   Redux    |        Docker         |
| Tailwind | TypeScript | React Testing Library |

<p align="right"><a href="#home">⬆ Back to top</a></p>

<!-- GITFLOW AND SEMVER -->

## Gitflow and semver

For the development of the project we created a documentation in order to follow the same guidelines, with this we seek to provide consistency in the development of the application.

See the documentation here: 👉 <a href="./gitflow-semver.md">Gitflow and semver</a>

<p align="right"><a href="#home">⬆ Back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

This project is not yet deployed, but you can try it in your local. Follow the instructions below to run it.

### Pre-requisites

1. Install docker
   ```sh
   https://www.docker.com/products/docker-desktop/
   ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/EmanuelAmico/staffys-delivery-client
   ```
2. Builds the docker image
   ```sh
   docker compose build local
   ```
3. Run the App
   ```sh
   docker compose up local
   ```

<p align="right"><a href="#home">⬆ Back to top</a></p>

<!-- FUNCTIONALITIES -->

## Functionalities

🔹 MANAGER

- [x] Login
- [x] See schedule line history by date
- [x] See delivery history
- [x] See the activity of the deliverymen
- [x] See the number of packages for each delivery person
- [x] Create packages
- [x] See packages
- [x] Edit packages
- [x] Delete packages

🔹 DELIVERY

- [x] Register
- [x] Login
- [x] Password recovery
- [x] Select packages (maximum 10)
- [x] See pending deliveries
- [x] See delivery history
- [x] Delete delivery history
- [x] Accept delivery declaration

🔹 OTHER

- [x] Session persistence
- [x] Responsive
- [x] Location the delivery person and show him where he is going on the map.
- [x] Points system for parcels delivered and penalties for do not complete of deliveries

<p align="right"><a href="#home">⬆ Back to top/a></p>

<!-- CONTRIBUTING -->

## Contributing

<p>Contributions from the Dev community help us learn, inspire and create new things. All contributions are welcome!</p>
<p>If you have any suggestion to improve the project or you find a bug you can inform us, please choose one of the following options</p>

🔹 REPORT BUG - REQUEST FEATURE

1. 👉 <a href="https://github.com/EmanuelAmico/staffys-delivery-client/issues">report bug - request feature</a>

🔹 PULL REQUEST

1. **Fork** to the project.
2. Create your Feature Branch (`git checkout -b feature/MyFeature`)
3. Commit your Changes (`git commit -m 'Add MyFeature'`)
4. Push to the Branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

<p align="right"><a href="#home">⬆ Back to top</a></p>

<!-- CONTACT -->

## Contact

<p align="left">
  <p>Emanuel Amico:</p>
  <a href="mailto:emanuelamicoo@gmail.com" target="_blank" rel="noopener noreferrer">
    <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-emanuelamicoo@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
  <a href="https://www.amico.com.ar/" target="_blank" rel="noopener noreferrer">
    <img alt="Portfolio" title="Portfolio" src="https://custom-icon-badges.demolab.com/badge/-Portfolio-teal?style=for-the-badge&logo=link&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/emanuel-amico" target="_blank" rel="noopener noreferrer">
    <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkedin-blue?style=for-the-badge&logoColor=white&logo=linkedin"/></a>
  <a href="https://github.com/EmanuelAmico" target="_blank" rel="noopener noreferrer">
    <img alt="Github" title="Github" src="https://custom-icon-badges.demolab.com/badge/-Github-grey?style=for-the-badge&logoColor=white&logo=github"/></a>
  <a href="https://gitlab.com/emanuelamico" target="_blank" rel="noopener noreferrer">
    <img alt="Gitlab" title="Gitlab" src="https://custom-icon-badges.demolab.com/badge/-Gitlab-orange?style=for-the-badge&logo=download&logoColor=white&logo=Gitlab"/></a>

  <p>Rafael Mojica:</p>
  <a href="mailto:rafael.mojica27@gmail.com" target="_blank" rel="noopener noreferrer">
    <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-rafael.mojica27@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
  <a href="https://rafaelmojica.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img alt="Portfolio" title="Portfolio" src="https://custom-icon-badges.demolab.com/badge/-Portfolio-teal?style=for-the-badge&logo=link&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/rafamojica/" target="_blank" rel="noopener noreferrer">
    <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkedin-blue?style=for-the-badge&logoColor=white&logo=linkedin"/></a>
  <a href="https://github.com/RafaMojica" target="_blank" rel="noopener noreferrer">
    <img alt="Github" title="Github" src="https://custom-icon-badges.demolab.com/badge/-Github-grey?style=for-the-badge&logoColor=white&logo=github"/></a>

  <p>Rodrigo Escalera:</p>
  <a href="mailto:roescal347@gmail.com" target="_blank" rel="noopener noreferrer">
    <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-roescal347@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
  <a href="https://my-portfolio-rodriix99.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img alt="Portfolio" title="Portfolio" src="https://custom-icon-badges.demolab.com/badge/-Portfolio-teal?style=for-the-badge&logo=link&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/rodrigo-escalera-a00a97252/" target="_blank" rel="noopener noreferrer">
    <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkedin-blue?style=for-the-badge&logoColor=white&logo=linkedin"/></a>
  <a href="https://github.com/Rodriix99" target="_blank" rel="noopener noreferrer">
    <img alt="Github" title="Github" src="https://custom-icon-badges.demolab.com/badge/-Github-grey?style=for-the-badge&logoColor=white&logo=github"/></a>

  <p>Santiago Estevez:</p>
  <a href="mailto:santi.estevez.multedo@gmail.com" target="_blank" rel="noopener noreferrer">
    <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-santi.estevez.multedo@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
  <a href="https://whimsical-lily-074ee6.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img alt="Portfolio" title="Portfolio" src="https://custom-icon-badges.demolab.com/badge/-Portfolio-teal?style=for-the-badge&logo=link&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/santi-estevez/" target="_blank" rel="noopener noreferrer">
    <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkedin-blue?style=for-the-badge&logoColor=white&logo=linkedin"/></a>
  <a href="https://github.com/elbolaestevez" target="_blank" rel="noopener noreferrer">
    <img alt="Github" title="Github" src="https://custom-icon-badges.demolab.com/badge/-Github-grey?style=for-the-badge&logoColor=white&logo=github"/></a>
</p>

<p align="right"><a href="#home">⬆ Back to top</a></p>
