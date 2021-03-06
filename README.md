## Mongodb Project

Project made it for practice with mongodb and Docker, build a video store data base with users, films and orders collections.

- [How to start](#how-to-start)
- [Tecnologies](#tecnologies)
- [Endpoints](#endpoints)


## How to start

- `npm install` in your terminal for install the dependencies.
- if you dont have docker installed, then install from [Docker](#https://www.docker.com/)
- In your terminal write `docker-compose up --build`.
- Open localhost:8081 mongo express you have access to the database or do it in [Postman](#https://www.postman.com/)

## Tecnologies

- Docker & Docker-compose
- MongoDB
- Nodejs
- Express
- Nodemon
- Mongoku
- Postman

## Endpoints 

 http://localhost:3000

  - /films
    - /create-films ( post )
    - /search ( get )
    - /show-all-films ( get )
    - /:id ( update )
    - 7:id ( delete )

=============================================

  - /users
    - /create-users ( post )
    - /show-users ( get )
    - /show-all-users ( get )
    - /:id ( update )
    - /:id ( delete )

==============================================

  - /orders
    - / ( post )
    - /show-orders ( get )
    - /show-all-orders ( get )
    - /:id ( update )
    - /:id ( delete )
