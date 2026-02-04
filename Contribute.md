## Manual installation
-Install nodejs locally ()
- clone the repo
-Install dependencies ( npm install)
- Start the DB loacally
   - docker run -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
   -Go to neon.tech and get your url
- Change .env file update your credentials
-npx prisma init 
-npx prisma migrate
-npx prisma generate
- npm run build
- npm run start


## Docker installation steps
-install docker
-Create a network - ` docker network create user_project`
-Start postgres
   - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
   - Build  the image - `docker build -t user-project .`
   - Start the image -` docker run -e DATABASE_URL=postgresql://postgres:sjkhlhfjfhjhf@postgres:5432/postgres --network user_project -p 3000:3000 user-project`

   ## Docker Compose installation steps
   -install docker, docker-compose
   -Run `docker-compose up`