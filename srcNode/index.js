const bcrypt = require('bcrypt');
const express=require("express");
require("./db/conn")
const path = require("path")
const  Register=require("./models/student")
const app=express();
const port=process.env.PORT || 8000;
app.use(express.json())



const statices = path.join(__dirname, "../public")

const tempalte = path.join(__dirname, "../template")




app.use(express.json())

app.use(express.urlencoded({ extended: false }))






app.set("view engine", "hbs")
app.use(express.static(statices))

app.set("views", tempalte)






//res date show 8000: port

// app.get("",(req,res)=>{


//     res.send("hello world")
// })



//hbs 



app.get("", (req, res) => {




    res.render("index")

})





//form SignUp

app.post("/Signup",async(req,res)=>{


    try {

        const userdata=new  Register({


            name:req.body.name,
            email:req.body.email,
            password:req.body.password

        })

        const user=await userdata.save();
        res.status(201).json({error:" successfully"})


        console.log(user)
        
    } catch (error) {

        console.log(error);

        res.status(401).json({error:"not successfully"})
        
    }


})



//login Signin


app.post("/Sigin",async(req,res)=>{


    try {

        const email=req.body.email;
        const password=req.body.password;

        const useremail=await Register.findOne({email:email})

        if(useremail.password == password){
            res.status(201).json({error:" successfully login form"})

        }else{

            console.log("this is error invalid sigin")
        }
        
    } catch (error) {
        

        console.log(error);

        res.status(401).json({error:"not successfully"})
        
    }

})

app.listen(port , ()=>{

    console.log("this is port: " , port)

})