// Import
const data = require('./data/datastore');
const { Book, Author } = require('./models');
const mongoose = require('mongoose');
//const dbstring = `mongodb://db:${process.env.DBPORT}/${process.env.DB}`;
const dbstring = `mongodb://${process.env.HOST}:${process.env.DBPORT}/${process.env.DB}`;

// Connect to database
const initialDbConnection = () => {

  // Check which OS is used (if Linuxe then; else Microsoft then)
  mongoose.connect(dbstring, { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log(`Database '${process.env.DB}' connection successful on port: ${process.env.DBPORT}`);
  });

  return true;
};

const initialDbSetup = () => {

  
  // Initialize database setup from scratch in case data does not exist
  let books = data.books;
  let authors = data.authors;

  // for each author in database
  data.authors.forEach(author => {
    Author(author).save();
  });

  // Return message
  // if (true) {
  //   console.log('Initial database was successfull. 0 entities have been created.')
  //   return true;
  // } else {
  //   console.log('Initial database was not successfull.')
  //   return false;
  // }
}

module.exports = { initialDbConnection, initialDbSetup }
