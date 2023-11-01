import express from 'express'
const router = express.Router()


router.post('/user',(req,res) => {
    console.log(req.body)
    res.send(req.body)
})

router.get('/user',(req,res) => {
    res.json({data : "user route"})
})


router.get('/test',(req,res) => {
    res.json({data : "testroute"})
});

router.get('*',(req,res) => {
    res.json({message : "moonj myre...."})
    
})

export default router;