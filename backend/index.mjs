import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser';

const port = 8000

const app = express();

const mongoose_uri = `mongodb://127.0.0.1:27017/contact_manger`; //change this to connect locally to mongodb

try{
  const db = await mongoose.connect(mongoose_uri, {
    serverSelectionTimeoutMS: 5000,
  });
  console.log(`\ndatabase connected\n{ host:${db.connection.host} port:${db.connection.port} database:${db.connection.name} }\n`)
}catch(e){
  console.log("database failure")
  console.log(e.reason.error.cause)
}

app.use(express.json());
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log(req.params)
    res.json({status : "hello server is working"})
})

import contactroute from './routes/contactRoute.mjs'

app.use('/',contactroute) // this adds the contact routes

app.listen(port,() => {
    console.log(`server started at http://localhost:${port}`)
})