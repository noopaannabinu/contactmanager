import { Contact } from "../models/contact.mjs";
import mongoose from "mongoose";

//this module contains the functionalities related to the Contacts


export const createContact = async (data) => { //this is used to create a new contact
    try{
        const contact = new Contact(data)
        const res = await contact.save()
        return res
    }catch (e){
        throw e;
    }
}