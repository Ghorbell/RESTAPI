const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    "Name":{
        type:String,
        required:true
    },
    "Age":{
        type: Number,
        required: false
    },
    
    "Email":{
        type: String,
        required: true,
         unique:true
    },
    "Password":{
        type: String,
        required: true
    }

})

module.exports=User=mongoose.model("user",userSchema);