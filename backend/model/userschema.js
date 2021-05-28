const mongoose =require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name : {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        contact:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        appdoc:{
            type:String,
            required:true
        }
    }
);
const User =mongoose.model('patient',userSchema);
 module.exports=User;