const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const PORT = 4000;
const app = express();

// Use graphql server as middleware
app.use('/graphql', graphqlHTTP({
  // Option object
  schema
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}...`);
});

// Create a single endpoint as route

// https://www.youtube.com/watch?v=ALqNbTik44o&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f

