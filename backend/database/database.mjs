import 'dotenv/config'
import mongoose from 'mongoose'
import { Contact } from '../models/contacts.js';
const  {
    MONGODB_SERVERLESS_USERNAME,
    MONGODB_SERVERLESS_PASSWORD,
    MONGO_DB_NAME,
  } = process.env;

  const mongoose_uri = `mongodb://127.0.0.1:27017/contact_manger`;

  const db = await mongoose.connect(mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  
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
mongoose.connection.close()