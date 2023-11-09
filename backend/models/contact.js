import 'dotenv/config'
import mongoose from 'mongoose'



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
    },
    dp : {
      type:String,
      default : null
    }
  },{timestamps : true});
  
  export const Contact = new mongoose.model(
    'contacts',
    contact_schema
  );