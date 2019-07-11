const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const DbConnector = require('./dbcontext/');

const PORT = process.env.PORT || 4000;
const app = express();

// Connect to database
DbConnector.initialDbConnection();

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
