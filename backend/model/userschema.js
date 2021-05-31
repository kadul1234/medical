const mongoose =require('mongoose');
//const bcrypt=require('bcrypt');

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
        },
        Temperature:[
             {
                temp:{
                type:Number,
                required:true}
            }
        ],
        Oxygen:[
            {
               oxy:{
               type:Number,
               required:true}
           }
       ],
       Pulse:[
        {
           pulse:{
           type:Number,
           required:true}
       }
   ],
   BloodPressure:[
    {
       bp:{
       type:Number,
       required:true}
   }
]
    }
);
/** 
userSchema.pre('save', async function(next){
    console.log("HI from inside");
if(this.isModified('password')){
this.password=bcrypt.hash(this.password,12);
}
next();
});
*/

const User =mongoose.model('patient',userSchema);
 module.exports=User;