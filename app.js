import express from 'express';
import connectDB from './db/connectdb.js';
const DatabaseURI = "mongodb://admin:password@127.0.0.1:27017/upgrad?authSource=upgrad" ;

// for authentication in cmd <db.createUser({user:"admin" , pass:"password" , roles:[{role:'read' , db :'upgrad'}]})>
// for get all the users  show users

const app = express();

connectDB(DatabaseURI);

app.listen(3000 , ()=>{
    console.log(`App listening at port 3000`);
});