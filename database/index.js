const mongoose = require('mongoose');
const { Book } = require('./models');

// Connect to database
const initialDbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/graphqlplaylistDB', { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
      console.log('Database connection successful.');
    });
};

// DB conext class to seperate db interactions from graphql logic
class DbContext{

  constructor(name){
     this.name = name ;
  }
 
  addBook(){

  }

  getBook(){

  }

  getBooks(){
    
  }
 }

module.exports = { initialDbConnection }
