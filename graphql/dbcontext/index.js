// Import
const mongoose = require('mongoose');
const dbstring = `mongodb://db:${process.env.DBPORT}/${process.env.DB}`;
// const dbstring = `mongodb://127.0.0.1:27017/graphqlplaylistDB`;

// Connect to database
const initialDbConnection = () => {

  mongoose.connect(dbstring, { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log(`Database '${process.env.DB}' connection successful on port: ${process.env.DBPORT}`);
  });
};

const initialDbSetup = () => {

  // Initialize database setup from scratch in case data does not exist
  dbx = new DbContext();

  // for each author in database
  const id = db.addBook

  // Return message
  if (true) {
    console.log('Initial database was successfull. 0 entities have been created.')
    return true;
  } else {
    console.log('Initial database was not successfull.')
    return false;
  }
}


// DB conext class to seperate db interactions from graphql logic
class DbContext {

  constructor(name) {
    this.name = name;
  }

  addBook() {
    let id;
    // DB interaction

    return id;
  }

  getBook() {

  }

  getBooks() {

  }
}

module.exports = { initialDbConnection }
