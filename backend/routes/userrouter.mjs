import express from 'express'
const router = express.Router()
import {registerUser,loginUser,getMe} from '../controllers/userController.mjs'

//routers for registration,login and display details
router.post('/register', registerUser)
router.get('/login',loginUser)
router.get('/me',getMe)

export default router

