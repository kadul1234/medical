const mongoose=require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

const DB='mongodb+srv://ayushmina:hospital@cluster0.3jluv.mongodb.net/hospital?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('connection is successfull');
}).catch((err)=>{
    console.error('No connection');

});


app.get('/' , (req , res)=>{
    res.send(`Hello world`);
});

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

app.listen(3001, ()=>{
    console.log('kaddy daddy working fine');
})