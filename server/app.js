const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

// Connect to AWS DynamoDB
mongoose.connect('mongodb://localhost:27017/graphqlplaylistDB', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Database connection successful.');
});

// Use graphql server as middleware
app.use('/graphql', graphqlHTTP({
  // Option object
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}...`);
});

// Create a single endpoint as route

// https://www.youtube.com/watch?v=3NdgP6AVYYs&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=16

