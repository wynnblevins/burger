# Eat Da Burger
Eat-Da-Burger! is a nodejs app that demonstrates A) a nodejs application using sequelize to talk to a mysql database and B) deployment of an application with a mysql database to heroku.

## Running Locally
### Prerequisites
In order to run the Eat-Da-Burger! application locally, one will need to have NodeJS installed as well as a local mysql database called burger_db.  This database can be installed by opening a terminal and running the following from the root of the project:
```
mysql -u root -p < db/schema.sql
```

### Starting a Local Server
To run the application locally, open a terminal, navigate to the project's root directory, and run the following command:
```
node server.js
```
This command will spin up a local node server and serve your application on [localhost:8080](http://localhost:8080) 

### Wiping the Database
For convenience purposes, if the developer wants to hava a fresh reinstall of their local burger_db database (ie wipe all data in the burgers table), then they can run the application with freshDb argument.  For example:
```
node server.js freshDb
```   

## Live Heroku Deployment
Currently the Eat-Da-Burger! application is deployed on heroku [here](https://shrouded-ravine-64865.herokuapp.com/)