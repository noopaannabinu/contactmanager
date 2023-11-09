import 'dotenv/config'
import mongoose from 'mongoose'
import { Contact } from '../models/contact.js';
const  {
    MONGODB_SERVERLESS_USERNAME,
    MONGODB_SERVERLESS_PASSWORD,
    MONGO_DB_NAME,
  } = process.env;
const mongoose_uri = `mongodb://127.0.0.1:27017/contact_manger`;

try{
  const db = await mongoose.connect(mongoose_uri, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  console.log([db.connection.host,db.connection.port,db.connection.name])
}catch(error){
  console.log(error)
}

const data ={name:{
  fname :"test",
  mname :"mname",
  lname: "lname"
}, 
age:30,
phone : "9495952562",
email : "test@test.com" 
}



const contact = new Contact(data)
const res  = await contact.save()
console.log(res)
