import React from 'react'
import comp from "../../assets/comp.png"
import { Link } from 'react-router-dom'

function Managefunds() {
  return (
    <div>
      <div className='mt-[7rem] ml-[2rem] sm:ml-[7rem] flex gap-20 md:flex-row flex-col '>
      <div>
        <p className='md:text-[3rem] leading-14 md:w-[40rem] w-[100vw] text-[2rem] font-[100] md:mt-[4rem] '>Control your security completely with one centralized dashboard.</p>
          <p className='md:w-[25rem] md:mt-[2rem] mt-[1rem] text-[1.2rem] font-[100]'>Our website has HTTPS encryption, robust firewall and we always ensure reqular security update</p>
           <Link className="hover:no-underline" to="/signup">  <button className='rounded-full w-[12rem] h-[3rem] text-white bg-[#3b82f6] mt-[1.5rem]'>Get Started</button></Link>
        </div>
        <img className='ml-[5rem] w-[14rem] md:w-[40rem]  md:ml-0' src={comp} alt="Bitcoin image" />
      </div>
    </div>
  )
}

export default Managefunds