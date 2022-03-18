1- Clone project;
``git clone ``

2- Install project dependencies;
``yarn``
or
``npm install``

3- Configure `.env` file with your database configuration to connection;

4- Run migrations for database:
`yarn knex:migrate`
or 
`npm run knex:migrate`

5- After migrations runs, you can start the API service.
By default, the API will use port 3334, but you can use a diferent one by editing the `.env` file on HTTP_PORT variable
`yarn start`
or 
`npm run start`