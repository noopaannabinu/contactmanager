import mongoose from 'mongoose'

const user_schema = mongoose.Schema({
  // contact name  
  username: {
      type: String,
      required: true,
      default : null,
      unique : true
    },
    password: {
        type: String,
        required: true,
        default : null
      },
    },{timestamps : true});

    export const User = new mongoose.model(
        'users',
        user_schema
    )