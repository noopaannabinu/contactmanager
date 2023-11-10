import asynchandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {User} from '../models/usermodel.mjs'


const registerUser =asynchandler(async(req,res) =>{
    const {username,password}= req.body
    if(!username  || !password){
       res.status(400)
        throw new Error('please add all fields')
        
    }
    res.send({ message: 'Register User'})
    console.log("hlooo")
    

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
