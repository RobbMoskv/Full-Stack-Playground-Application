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

// DB conext class to seperate db interactions from graphql logic
class DbContext {

  constructor(name) {
    this.name = name;
  }

  addBook() {

  }

  getBook() {

  }

  getBooks() {

  }
}

module.exports = { initialDbConnection }
