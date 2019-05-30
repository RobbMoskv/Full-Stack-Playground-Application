const express = require('express');
const graphqlHTTP = require('express-graphql');

const PORT = 4000;
const app = express();

// Use graphql server as middleware
app.use('/graphql', graphqlHTTP({
  // Option object

}));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}...`);
});

// Create a single endpoint as route

// https://youtu.be/ed8SzALpx1Q?t=1481

