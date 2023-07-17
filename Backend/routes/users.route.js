const express = require('express')

const router = express.Router();

const User = require('../Schemas/user.model')


router.get('/',(req,res)=>{

    res.send('At this route you will Users')
})

 
router.put('/login',(req,res)=>{
    var email = req.body.email;
    var pass = req.body.password;

    console.log(email)
    console.log(pass)
    if(email == 'umerfarooq@gmail.com' && pass=='123456')
        return res.json(true);
    else return res.json(alpha);


})

router.post('/addUser',async(req,res)=>{
    var email = req.body.email;
    var pass = req.body.password;

    const user = new User({email:email,password:pass})
    await user.save();
    res.json(true);


})



module.exports = router;