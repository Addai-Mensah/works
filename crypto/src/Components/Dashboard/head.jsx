import React from 'react'
import avatar from "../../assets/avatar.png"

function Head() {
  return (
    <div>
        <div className='flex items-center justify-center my-[3rem] '>
           <div className='flex items-center gap-3'>
           <h1 className='text-[1.2rem] text-[#000000e9] font-bold'>Welcome back Kojo</h1>
           <img className='w-[3rem] rounded-lg' src={avatar} alt="" />
           </div>
            
        </div>
    </div>
  )
}

export default Head