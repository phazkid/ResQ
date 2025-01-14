const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path : './config.env'})

const app = require('./app')


async function Dbconnection () {
    try{
    await mongoose.connect(process.env.DATABASE, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    
   })
    console.log('connected to mongodb database');
     }catch(error){
     console.log(`failed to connect to Db ${error}`);
     }
 
   }
 
 Dbconnection()
