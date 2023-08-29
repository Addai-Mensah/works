import React, { useState } from 'react'
import Head from './head'
import axios from 'axios' 
import Layout from './Layout'
import { UfWidget } from "@uploadfly/react-widget";
import "@uploadfly/react-widget/dist/style.css";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   

function Settings() {
    const user = JSON.parse(sessionStorage.getItem('user'))

    const [email, setemail] = useState(user?._doc?.email ?? "")
    const [name, setname] = useState(user?._doc?.name ?? "")
    const [password, setpassword] = useState("")

    const [loading, setloading] = useState(false)


    

    async function updateUser(event) {
        event.preventDefault()
        setloading(true)

        try {
            const res = await axios.post("https://cryogenic.onrender.com/api/user", {
                name,
                email,
                password,
            })
            console.log(res?.data)

            alert("data updated successfully")
            window.location.href = "/login"
            setloading(false)

        } catch (error) {
            console.log(error?.response?.data)
            setloading(false)

        }
    }

    const handleProfileChange = async (data) => {
        try {
            const res = await axios.post("https://cryogenic.onrender.com/api/user/profile", {
                email,
                profilePic : data.url,
            })
            console.log(res?.data)

            Swal.fire({
                title: 'Profile picture updated',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            setloading(false)

        } catch (error) {
            console.log(error?.response?.data)
            setloading(false)

        }
    }


    return (
        <Layout>
            <div className=' '>
                {/* <Head title={"Settings"} /> */}
                <div className="">
                    {/* <UfWidget apiKey="uf_98c8ce200e91499ea132703e0e50c1fd" onUploadComplete={handleProfileChange}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full   mb-[2rem]'>Change Profile Pics</button>
                    </UfWidget> */}

                    <form className=" rounded px-8 pt-6 pb-8 mb-4 mt-[5rem] shadow">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" className="shadow appearance-none border rounded  md:w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="shadow appearance-none border rounded  md:w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="shadow appearance-none border rounded   md:w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password" placeholder="Password" />
                        </div>
                        <div className="flex items-center justify-between">
                            {
                                loading ?
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        loading
                                    </a>
                                    :
                                    <button onClick={updateUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  md:w-[6rem]" type="submit">
                                        Update
                                    </button>
                            }
                        </div>
                        
                    </form>
                </div>
            </div>
        </Layout>


    //     <Layout>
    //          <Card color="transparent" shadow={false} className="flex items-center justify-center mt-[5rem] ml-[2rem]">
    //   <Typography variant="h4" color="blue-gray">
    //     Sign Up
    //   </Typography>
    //   <Typography color="gray" className="mt-1 font-normal">
    //     Enter your details to register.
    //   </Typography>
    //   <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    //     <div className="mb-4 flex flex-col gap-6">
    //       <Input value={name} onChange={(e) => setemail(e.target.value)} type="text" size="lg" label="Username" />
    //       <Input value={email} onChange={(e) => setemail(e.target.value)} type="email" size="lg" label="Email" />
    //       <Input value={password} onChange={(e) => setemail(e.target.value)}  type="password" size="lg" label="Password" />
    //     </div>
    //     <Checkbox
    //       label={
    //         <Typography
    //           variant="small"
    //           color="gray"
    //           className="flex items-center font-normal"
    //         >
    //           I agree the
    //           <a
    //             href="#"
    //             className="font-medium transition-colors hover:text-gray-900"
    //           >
    //             &nbsp;Terms and Conditions
    //           </a>
    //         </Typography>
    //       }
    //       containerProps={{ className: "-ml-2.5" }}
    //     />
    //     <Button  className="mt-6" fullWidth>
    //       Register
    //     </Button>
    //     <Typography color="gray" className="mt-4 text-center font-normal">
    //       Already have an account?{" "}
    //       <a href="#" className="font-medium text-gray-900">
    //         Sign In
    //       </a>
    //     </Typography>
    //   </form>
    // </Card>
    //     </Layout>

       
    )
}

export default Settings