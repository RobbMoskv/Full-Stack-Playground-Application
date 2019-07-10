const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const DbConnector = require('../database');

const PORT = 4000;
const app = express();

// Connect to database
DbConnector.initialDbConnection();
// mongoose.connect('mongodb://localhost:27017/graphqlplaylistDB', { useNewUrlParser: true });
// mongoose.connection.once('open', () => {
//   console.log('Database connection successful.');
// });

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
