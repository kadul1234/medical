const mongoose = require('mongoose');

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