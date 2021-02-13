<h1 align="center">
  <img alt="logo" src="./public/logo.svg">
</h1>
<h3 align="center">
  API for GoBarber
</h3>

<p align="center">
  <img alt="Top language" src="https://img.shields.io/github/languages/top/frndsjoao/GoBarber-web?color=%2315C465">
  
  <img alt="GitHub" src="https://img.shields.io/github/license/frndsjoao/GoBarber-web?color=%2315C465">

  <a href="https://www.linkedin.com/in/frnds-joao/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-João%20Pedro%20A.-%2315C465">
  </a>
  
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>


## 📄 About the project

Go to **web** here: [GoBarber Rest API](https://github.com/frndsjoao/GoBarber-web)</br>
Go to **mobile client** here: [GoBarber Mobile](https://github.com/frndsjoao/GoBarber-app)</br>

This api provides everything needed to organize appointments for barbers and customers.

**Gobarber is an application developed during GoStack Bootcamp, by Rocketseat, focused to learn the best use of ReactJS.**
I'm totally thankful to Rocketseat for the excellent bootcamp.


## 💻 Technologies

Technologies that I used to develop this api

<p>
  <a href="https://nodejs.org/en/">NodeJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.typescriptlang.org/">Typescript</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://expressjs.com/pt-br/">Express</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/expressjs/multer">Multer</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://typeorm.io/#/">TypeORM</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.postgresql.org/">PostgreSQL</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://jestjs.io/">Jest</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://eslint.org/">Eslint</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://prettier.io/">Prettier</a>
</p>


## 💻 Getting started

### ⚠ Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- An instance of [PostgreSQL](https://www.postgresql.org/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/frndsjoao/GoBarber-backend.git && cd gobarber-backend
```

**Then install the dependencies**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# Start the api service
$ yarn dev:server
```

## 📝 License

Not specified.
