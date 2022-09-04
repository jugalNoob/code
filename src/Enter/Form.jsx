import React,{useState,useEffect} from 'react'
import {Link} from  "react-router-dom"
function Form() {
    const [user,setUser]=useState({

        name:"",
        email:"",
        password:"",
        

        
          })

        //   const history=useHistory();

  const Data=(e)=>{

  
    console.log(e)
  let name=e.target.name

  let value=e.target.value

  setUser({...user,[name]:value})

  }



  const postData=async(e)=>{
e.preventDefault()
    

const {name , email , password }=user;


const userdata=await fetch("/Signup",{

  method: "POST",

  headers: {

    "Content-Type": "application/json"
  },


  body: JSON.stringify({

    name,
    email,
    password,
   
  })


})


const data=await userdata.json();

if(data.status === 422 || !data){

  window.alert("invalid resigart")

  console.log("invalid")

}else{

  window.alert("complete");

  console.log("complete")

  alert("it completed successfully")
//  history.push("/login")
}

}

  return (
    <div>

{/* last row class line */}

<div className="forms">

  <h1>signup</h1>

<form>

<input type="text" name="name" value={user.name} onChange={Data} autoComplete="off" id="" placeholder="name" />
<br />
<br />
<input type="email" name="email"   autoComplete="off" value={user.email} onChange={Data}  id="" placeholder="email" />
<br />
<br />
<input type="password" name="password" autoComplete="off" value={user.password} onChange={Data} id=""  placeholder="password" />
<br />
<br />



<input type="submit"  value="register"    onClick={postData} id="" />
</form>


        <p> already have an account ? <Link to = "/login"> login </Link></p >
</div>

    

    {/* first row line */}
    </div>
  )
}

export default Form