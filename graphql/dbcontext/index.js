// Import
const mongoose = require('mongoose');
const dbstring = `mongodb://localhost:${process.env.PORT}/${process.env.DB}`;

// Connect to database
const initialDbConnection = () => {
  
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

  mongoose.connect(dbstring, { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log('Database connection successful.');
    console.log(dbstring);
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
