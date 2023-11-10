import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import asynchandler from 'express-async-handler'
import {Contact} from "../models/contacts.mjs";




const registerUser =asynchandler(async(req,res) =>{
    /*const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }*/
    res.send({ message: 'Register User'})
})

const loginUser =asynchandler(async(req,res) =>{
    console.log({ message: 'login User'})
    res.send({ message: 'login user'})
})

const getMe=asynchandler(async(req,res) =>{
    console.log({ message: ' User data display'})
    res.send({ message: 'user display'})
})

export { registerUser, loginUser, getMe };
