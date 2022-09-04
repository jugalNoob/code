const mongoose=require("mongoose");


const studentdata=new mongoose.Schema({

    name:{
        
        type:String
    },
    
    email:{
        type:String,Number,
    },

    password:{

        type:Number,
    },

    
})


const Register=new mongoose.model("Users" , studentdata)


module.exports = Register;

