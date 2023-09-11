# HNGX Stage Two

## Setup

Clone the repo and install dependencies.
This repo uses a PostgreSQL database and use Prisma ORM for database connection.
Repo contains a migration to setup the database persons table.
Depending on the enviroment variables DATABASE_URL value in a .env file, it is used to establish a connection to a Database either locally or on a server.

Exmaple for a local deployment using running Postgres DB

```bash
DATABASE_URL="postgresql://postgres:root@localhost:5432/test?schema=public"
```

To run a Postgres container using Docker run this command

```bash
docker run -d --name postgres-container \
  -e POSTGRES_DB=test \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=root \
  -p 5432:5432 \
  postgres:15.3-alpine

```

In this repo contains DB migration to create the person table. To setup Db run this command

```bash
npx prisma migrate deploy
```

# UML

![UML](https://github.com/iamstarcode/hngx-stage-two/assets/66052346/98ceba79-3511-4024-9f76-d88bd0448fc7)

# Usage & API Documentation

To test the API and Documentation, Head over to the Documentation page here

[Live URL](https://hngx-stage-two-1ifi.onrender.com/api/docs)

On the docs page click on any of the API endpoint and click on the "Try it Out" button to test the API
