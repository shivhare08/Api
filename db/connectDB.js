const mongoose = require('mongoose')

const connectDB =()=>{
     mongoose.connect('mongodb://127.0.0.1:27017/shashankApi',{
        
    }).then(()=>{
        console.log("success");
    }).catch((e)=>{
        console.log(e);
    })
}

module.exports = connectDB