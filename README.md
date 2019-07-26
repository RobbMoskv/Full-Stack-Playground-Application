# Full Stack Playground Application :boom:

This application consists of separated frontend, backend and database environments.
All solution parts run in a dedicated Docker container and communicate via GraphQL API among each other on pre-defined ports.

![Diagram](./Diagram.jpg?raw=true 'Diagram')

The use case itself is held simple for the time being. A Frontend application allows you to request certain kind of books and their corresponding authors. The purpose of this little side project was more of technical and innovativ nature instead of a strong use case. That may changes in the neara future.

### Prerequesits

- Download and install [Node.js](http://nodejs.org)
- Download and install **Docker** and **Docker Compose**

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

### Documentation

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
