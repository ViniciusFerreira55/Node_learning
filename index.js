// const {Person} = require("./person");
const dotenv = require('dotenv');

const connectToDatabase = require('./src/database/connect');
dotenv.config();

connectToDatabase();



// require("./modules/fs")
// const person = new Person('Leonardo')
// // require("./modules/http");
// require("./modules/express")
// console.log(person.sayMyName());