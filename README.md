# HNGX Stage Two

## Overview

Clone the repo and install dependencies.
This repo uses a PostgreSQL database and use Prisma ORM for database connection.
Repo contains a migration to setup the database Person table.
Depending on the enviroment variables DATABASE_URL in a .env file it setup DB and creates Person table by simply running this command.
exmaple for a local deployment using running Postgres DB

```bash
DATABASE_URL="postgresql://postgres:root@localhost:5432/test?schema=public"
```

```bash
npx prisma migrate deploy
```

# UML

its gon to be an immae

# Usage

To test the API, I implemented the Swagger API Document which can be found on this live URL

[Live URL](https://hngx-stage-two-1ifi.onrender.com/api/docs)
