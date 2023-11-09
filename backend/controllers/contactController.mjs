import { Contact } from "../models/contact.mjs";
import mongoose from "mongoose";

export const createContact = async (data) => {
    try{
        //console.log(data)
        const contact = new Contact(data)
        const res = await contact.save()
        return res
    }catch (e){
        console.log(e)
        throw e;
    }
}