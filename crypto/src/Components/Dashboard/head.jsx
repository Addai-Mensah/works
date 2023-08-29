import React from 'react'
import avatar from "../../assets/avatar.png"
import axios from 'axios'

function Head({ title }) {
  const user = JSON.parse(sessionStorage.getItem('user'))
  console.log(user)
  return (
      <div className=' my-[3rem] '>
        <div className='flex items-center gap-3'>
          <h1 className='text-[1.2rem] text-[#000000e9] font-bold'>{title ?? `Welcome back ${user?._doc?.name ?? ""}`}</h1>
          {/* <img className='w-[3rem] rounded-lg' src={avatar} alt="" /> */}
        </div>
      </div>
  )
}

export default Head