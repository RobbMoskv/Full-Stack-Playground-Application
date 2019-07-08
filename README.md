# GraphQL API on MongoDB :boom:

### Prerequesits

#### Node.js

- Download and install [Node.js](http://nodejs.org)

#### Docker

- Download and install **Docker**

#### Use a MongoDB Docker container

Choose the latest mongo image from Docker Hub, map the ports and run a container.

```
sudo docker run -p 27017:27017 --name graphqlplaylistDB -d mongo
```

#### Install MongoDB locally

To run a local database you need to install MongoDB locally and then add a config.js file in the _database_ directory looking as follows:

> server/database/config.js

```javascript
const connectionString = "mongodb://localhost:27017/gql-playlist";

module.exports = { connectionString };
```


### Documentation 1.0
