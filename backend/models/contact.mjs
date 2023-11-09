import mongoose from 'mongoose'

const contact_schema = mongoose.Schema({
  // contact name  
  name: {
      type: String,
      required: true,
      default : null
    },
  
    // age : age
    age : {
      type : Number
    },
    // ph: phone number
    phone: {
      type: String,
      unique : true,
      required : true
    },
    //gm : contact mail
    email : {
      type : String,
      //required : true,
      default : null
    },
    // display picture link
    dp : {
      type:String,
      default : null
    }
  },{timestamps : true});
  
  export const Contact = new mongoose.model(
    'contacts',
    contact_schema
  );