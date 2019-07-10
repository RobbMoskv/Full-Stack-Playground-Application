# GraphQL API on MongoDB :boom:

### Prerequesits

#### Node.js

- Download and install [Node.js](http://nodejs.org)

#### Docker

- Download and install **Docker**

#### Setup a MongoDB Docker container

Choose the latest mongo image from Docker Hub, map the ports and run a container.

```bash
# Run docker container
$ sudo docker run -p 27017:27017 --name graphqlplaylistDB -d mongo

# To verify whether everything worked as expected, access the bash
$ docker exec -it graphqlplaylistDB bash
> mongo
> show dbs

```

### Documentation 1.0

The following short documentation should explain the **simple architecture** used in this project.
To achieve a clean (but not yet true) _seperation of concerns_ the application was layered.

#### Database Layer

The database layer contains the **Object-Document-Mapping**. For each MongoDB collection a corresponding module exists.

#### Graphql Layer

A **single GraphQL endpoint** provides the one and only interaction point to the application by allowing
**data consumption** as well as **defined mutations** possibilities.

How to add objects to a MongoDB collection?

```js
mutation{
  addAuthor(name: "Peter Markle", age: 61){
    id
    name
  }
}
```

#### App Layer

tbd.