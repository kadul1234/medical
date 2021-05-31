const express = require('express');

const router = express.Router();


require('../db/conn');
const User = require('../model/userschema');

router.get('/doctor/:usernamedoc' , (req , res)=>{
    const userDoc = req.params.usernamedoc;
    const {name , email , contact} = req.body;
    const query = {"appdoc":userDoc};
    const projection = {
        "_id":0,
        "name":1,
        "email":1,
        "contact":1

    }
    return User.find(query, projection)
    .then(result => {
        if(result) {
            console.log(`Successfully found document: ${result}.`);
        } else {
            console.log("No document matches the provided query.");
        }
    return res.send(result);
  })
    .catch(err => console.error(`Failed to find document: ${err}`));

})


module.exports = router;