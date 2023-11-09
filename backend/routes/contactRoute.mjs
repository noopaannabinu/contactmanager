import { createContact } from '../controllers/contactController.mjs'
import { Contact } from '../models/contact.mjs'
import express from 'express'
const router = express.Router()

router.post('/createContact',async (req,res)=>{
    try{
        const data = new Contact(req.body)
        const result = await createContact(data)
        console.log(req.body)
        res.send(result)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})

export default router;