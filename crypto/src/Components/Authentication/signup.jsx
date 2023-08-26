import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import abstracts from "../../assets/bg.png"
  import { Link } from 'react-router-dom'
  import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
   
  export default function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    async function registerUser(event) {
      event.preventDefault()
      if (name.length == 0 || email.length == 0 || password.length == 0) {
        setError(true)
      }

      else{
        try {
          const res = await axios.post("https://cryogenic.onrender.com/api/register", {
            name,
            email,
            password,
          })
          console.log(res.data)
          
          Swal.fire({
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            icon: 'success',
            title: 'Signup Success',
            showConfirmButton: false,
            timer: 2500
          })
     
          window.location.href = "/login"
        }

        catch (error) {
          console.log(error.response.data)
        }
      }
       
    }

    
    return (
      <div>
       <div className=" flex items-center md:flex-row flex-col ">
       <div className=" md:w-2/4 w-full h-[40vh] md:h-[100vh] bg-no-repeat"   style={{backgroundImage: `url(${abstracts})`}}>
        <h1 className="text-white font-bolder text-[1.8rem] md:w-[25rem] w-[20rem] md:ml-[3rem] ml-[3rem] md:mt-[15rem] mt-[5rem] ">Unlock the Future of Wealth with  Decent Nano </h1>
        <p  className="text-white  text-[0.9rem] md:w-[25rem] ml-[3rem]">Tokenize success, optimize returns</p>
       </div>


       <div className="md:my-0 my-[3rem]">
       <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-[#3F7AEE]">
        Create Account
      </Typography>
      <Typography className="mt-2 font-normal text-[#3F7AEE]">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={registerUser}>
        <div className="mb-4 flex flex-col gap-6">
          <Input  size="lg" label="Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           type="text"
          />
           {error && name.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Name can't be empty</span>: ""
            }
          <Input size="lg" label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          />
           {error && email.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Email can't be empty</span>: ""
            }
          <Input  size="lg" label="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          />
           {error && password.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Passward can't be empty</span>: ""
            }
        </div>

        <input className="mt-6 bg-[#3F7AEE] py-[0.2rem] text-white w-[7rem] rounded-lg" type="submit" value="Register" />

       <Link to="/login"> <Typography color="gray" className="mt-4 text-center text-[0.9rem] font-normal text-[#3F7AEE]">
          Already have an account?{" "}
          <a href="#" className="font-medium  text-[#3F7AEE]">
            Sign In
          </a>
        </Typography>
       </Link>
      </form>
    </Card>
       </div>


      </div>
      </div>
    );
  }