import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser';

const app = express();

const port = 8000

app.use(express.json());
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log(req.params)
    res.json({data : "hello serveer is working"})
})

import userroute from './routes/route.mjs'

app.use('/',userroute)

app.listen(port,() => {
    console.log(`server started at http://localhost:${port}`)
})