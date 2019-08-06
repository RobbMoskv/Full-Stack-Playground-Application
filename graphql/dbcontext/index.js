// Import
const data = require('./data/datastore');
const { Book, Author } = require('./models');
const mongoose = require('mongoose');

const dbstring = `mongodb://${process.env.HOST}:${process.env.DBPORT}/${process.env.DB}`;

// Connect to database
const initialDbConnection = () => {
  // Check which OS is used (if Linuxe then; else Microsoft then)
  try {
    mongoose.connect(dbstring, { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
      console.log(`Database connection was successfull: ${dbstring}`);
    });
    return true;
  }
  catch (error) {
    errorHandler(error);
    return false;
  }
};

const initialDbSetup = () => {
  try {
    mongoose.connection.once('open', () => {
      mongoose.connection.db.dropDatabase();
      // for each author in database
      for (let i = 0; i < data.authors.length; i++) {
        Author(data.authors[i]).save()
          .then(result => {
            addBookswithAuthorId(result._id);
          })
          .catch(err => errorHandler(err));
      }
      console.log(`Initial database was successfull.`);
      return true;
    });
  } catch (error) {
    errorHandler(error);
  }
}

// Enrich book object with author id's
function addBookswithAuthorId(authorId) {
  for (let i = 0; i < 2; i++) {
    data.books[0].authorid = authorId;
    Book(data.books[0]).save();
    data.books.shift();
  }
}

function errorHandler(err) {
  console.log(`Hi Server, this is your error: ${err}`);
}

module.exports = { initialDbConnection, initialDbSetup }
