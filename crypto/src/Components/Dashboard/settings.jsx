import React, { useState } from 'react'
import btc from "../../assets/btc.png"
import metamask from "../../assets/metamask.png"
import trustwallet from "../../assets/trustwallet.png"
import Head from './head'
import Dashboardtable from './dashboardtable'
import axios from 'axios' 
import Layout from './Layout'
import { UfWidget } from "@uploadfly/react-widget";
import "@uploadfly/react-widget/dist/style.css";

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
            const res = await axios.post("http://localhost:10000/api/user", {
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
            const res = await axios.post("http://localhost:10000/api/user/profile", {
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
            <div className='px-4'>
                <Head title={"Settings"} />
                <div className="w-screen">
                    <UfWidget apiKey="uf_98c8ce200e91499ea132703e0e50c1fd" onUploadComplete={handleProfileChange}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-8/12 mt-4 mb-4'>Change Profile Pics</button>
                    </UfWidget>

                    <form className="w-10/12 md:w-6/12 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password" placeholder="Password" />
                        </div>
                        <div className="flex items-center justify-between">
                            {
                                loading ?
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        loading
                                    </a>
                                    :
                                    <button onClick={updateUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                                        Update
                                    </button>
                            }
                        </div>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Settings