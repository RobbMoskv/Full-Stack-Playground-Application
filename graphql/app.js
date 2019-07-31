if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
var cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const DbConnector = require('./dbcontext/');

const PORT = process.env.PORT || 4000;
const app = express();

// Connect to database
let dbconnected = false;
if(dbconnected){
  console.log('Connector')
  dbconnected = DbConnector.initialDbConnection();
}

// Enable Cross-origin resource sharing (CORS)
app.use(cors());

// Use graphql server as middleware
app.use('/graphql', graphqlHTTP({
  // Option object
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`GraphQL server is listening on port: ${PORT}...`);
});

// Initiate database setup
if(dbconnected){
  DbConnector.initialDbSetup();
}

// Create a single endpoint as route
