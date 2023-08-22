import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import Swal from "sweetalert2"
import abstract from "../../assets/bg.png"
import background from "../../assets/bg.png"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  async function loginUser(event) {
    event.preventDefault()
   const response = await fetch("http://localhost:10000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json()

    if (data.user){

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successful ',
        showConfirmButton: false,
        timer: 2500
      })

      window.location.href = "/dashboard"
    }else {
      alert("Please check username and  password")
    }
    console.log(data)
  }

  return (
    <div>
         <div className=" flex items-center md:flex-row flex-col ">
       <div className=" md:w-2/4 w-full h-[50vh] md:h-[100vh] bg-no-repeat block md:hidden"   style={{backgroundImage: `url(${abstract})`}}>
       </div>

       <div className=" md:w-2/4 w-full h-[50vh] md:h-[100vh] bg-no-repeat md:block hidden"   style={{backgroundImage: `url(${background})`}}>
       </div>


       <div className="md:my-0 my-[3rem]">
       <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-[#3F7AEE] ">
        Login
      </Typography>
      <Typography className="mt-1 font-normal text-[#3F7AEE] ">
        Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={loginUser}>
        <div className="mb-4 flex flex-col gap-6">
          
         <Input size="lg" label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          />
          <Input  size="lg" label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          />
        </div>
     
        <input className="mt-6 bg-[#3F7AEE] py-[0.2rem] text-white w-[7rem] rounded-lg" type="submit" value="Login" />
       <Link to="/signup"> <Typography color="gray" className="mt-4 text-center text-[0.9rem] font-normal text-[#3F7AEE]">
          Click here to Signup
        
        </Typography>
       </Link>
      </form>
    </Card>
       </div>


      </div>
    </div>
  )
}

export default Login