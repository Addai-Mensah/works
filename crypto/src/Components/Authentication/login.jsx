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
  const [error, setError] = useState(false);


  async function loginUser(event) {
    event.preventDefault()

    if( email.length == 0 ||  password.length == 0  ){
      setError(true)
    }

   
    const response = await fetch("https://cryogenic.onrender.com/api/login", {
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

    if (data.user) {
      localStorage.setItem("token", data.token)
      sessionStorage.setItem("user", JSON.stringify({ ...data.user, password: null }))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successful ',
        showConfirmButton: false,
        timer: 2500
      })

      window.location.href = "/dashboard"
    } else {
      alert("Please check username and  password")
    }
    console.log(data)
  }

  return (
    <div>
      <div className=" flex items-center md:flex-row flex-col ">
        <div className=" md:w-2/4 w-full h-[50vh] md:h-[100vh] bg-no-repeat block md:hidden" style={{ backgroundImage: `url(${abstract})` }}>
          <h1 className='text-white flex items-center justify text-[1.5rem] text-center mt-[7rem]'>Unlock the Future of Wealth With Decent Nano Ledger</h1>
          <h3 className='text-white text-center'>Tokenize success, optimize returns</h3>
        </div>

        <div className=" md:w-2/4 w-full h-[50vh] md:h-[100vh] bg-no-repeat md:block hidden" style={{ backgroundImage: `url(${background})` }}>
        <h1 className='text-white  text-[1.7rem] mt-[20rem] ml-[5rem] w-[20rem]'>Unlock the Future of Wealth With Decent Nano Ledger</h1>
          <h3 className='text-white text-[1rem] ml-[5rem] '>Tokenize success, optimize returns</h3>
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
                 {error && email.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Email can't be empty</span>: ""
            }
                <Input size="lg" label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                 {error && password.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Passward can't be empty</span>: ""
            }
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