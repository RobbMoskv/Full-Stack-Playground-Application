# GraphQL API on MongoDB :boom:

### Prerequesits

#### Node.js

- Download and install [Node.js](http://nodejs.org)

#### Docker

- Download and install **Docker**

#### Setup a MongoDB Docker container

Choose the latest mongo image from Docker Hub, map the ports and run a container.

```
$ sudo docker run -p 27017:27017 --name graphqlplaylistDB -d mongo

# To verify whether everything worked as expected, access the bash
$ docker exec -it graphqlplaylistDB bash
> mongo
> show dbs

```

### Documentation 1.0
