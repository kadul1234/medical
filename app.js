const mongoose=require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();

app.use(express.json());


require('./db/conn');



app.use(require('./router/doctor_search'));

const User = require('./model/userschema')

const middleware = (req , res , next)=>
{
    console.log(`Middle ware`);
    next();
}


//app.get('/' , (req , res)=>{
//    res.send(`Hello world`);
//});

app.post('/signup',async(req ,res)=>{
    const{name,email,contact,password,appdoc}=req.body;
    if(!name || !email || !contact || !password || !appdoc ){
        res.status(422).json({error:"please fill up"});
    }
   /* res.json({msg:"success"});*/
    console.log(name);
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
            res.status(422).json({error:"please fill new email  up"});
        }
        const user=new User({name,email,contact,password,appdoc});
        const userRegister=await user.save();
        if(userRegister){
            res.status(201).json({message:"user saved"});
        }
    }
    catch(err){
        console.log(err);
    }

   

});

app.listen(80, ()=>{
    console.log('kaddy daddy working fine');
})