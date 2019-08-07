if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const schema = require('./schema/schema');
const DbConnector = require('./dbcontext/');

const PORT = process.env.PORT || 4000;
const app = express();

// Connect to database
if (DbConnector.initialDbConnection()) {
  // Enable Cross-origin resource sharing (CORS)
  app.use(cors());

  app.use(morgan('tiny'));

  // Use graphql server as middleware
  app.use('/graphql', graphqlHTTP({
    // Option object
    schema: schema,
    graphiql: true
  }));

  app.listen(PORT, () => {
    debug(`GraphQL server is listening on port: ${chalk.green(PORT)}...`);
  });

  // Initiate database setup
  // DbConnector.initialDbSetup();
}
else {
  debug(chalk.red('Ups. Database connection could not been established.'));
}


