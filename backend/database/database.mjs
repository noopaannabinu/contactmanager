import 'dotenv/config'
import mongoose from 'mongoose'

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


const contact_schema = mongoose.Schema({

  name: {
    type: JSON,
    required: true,
    default : null
  },

  // loc : location
  age : {
    type : Number
  },
  // ph: phone number
  phone: {
    type: String,
    //default: null,
    required : true
  },
  //gm : merchant's email
  email : {
    type : String,
    //required : true,
    default : null
  }
},{timestamps : true});

export const Contact = new mongoose.model(
  'contacts',
  contact_schema
);
const contact = new Contact(data)
const res  = await contact.save()
console.log(res)
mongoose.connection.close()