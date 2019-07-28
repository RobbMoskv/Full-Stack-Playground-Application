// Import
const mongoose = require('mongoose');
const dbstring = `mongodb://192.168.99.100:${process.env.DBPORT}/${process.env.DB} || 
                  mongodb://localhost:${process.env.DBPORT}/${process.env.DB} `;

// Connect to database
const initialDbConnection = () => {

  mongoose.connect(dbstring, { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log('Database connection successful.');
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
