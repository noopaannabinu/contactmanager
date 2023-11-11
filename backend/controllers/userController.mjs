import asynchandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {User} from '../models/usermodel.mjs'


const registerUser =asynchandler(async(req,res) =>{
    console.log(req.body)
    const {username,password}= req.body
    if(!username  || !password){
       res.status(400)
        throw new Error('please add all fields')
        
    }
    const userExists= await User.findOne({username})
    if (userExists){
        res.status(400)
        throw new Error('user already exists')

    }
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const user=await User.create({
        username,
        password:hashedPassword
    })
    console.log(user._id)
    if(user){
        res.status(201).json({
            _id:user.id,
            username:user.username,
            
            //token: generateToken(user.id),
            
        })
        
        }else{
            res.status(100)
                throw new Error('invalid user data')
        }
    // res.json({ message: 'Register User'})
    // console.log("hlooo")
    

})

const loginUser =asynchandler(async(req,res) =>{
    const{username,password}=req.body
    const user=await User.findOne({username})
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            username:user.username,
           //token: generateToken(user._id),
        })
}else {
    res.status(100)
                throw new Error('invalid user credentials')
}


    res.send({ message: 'login user'})

})

const getMe=asynchandler(async(req,res) =>{
    
    res.json({ message: 'user display'})
})

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

export { registerUser, loginUser, getMe };
