import React from 'react'
import heroimg from "../../assets/hero.png"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className=' '>
         <div className=''>
           <div>
           
           <div>
           <div className=' flex items-center justify-center md:flex-row flex-col ml-[0.7rem] md:ml-0 mb-[5rem]'>
              <div className=''>
              
                <h1 className='md:text-[2.5rem] md:w-[30rem] text-[1.4rem]  '>WELCOME TO DECENT NANO LEDGER</h1>
                <p className='md:w-[25rem]  mt-[2rem] text-[0.9rem]  '>Where all patriots are recommended to backup their digital assets and funds for the global event and blackout coming soon!</p>
                <Link className="hover:no-underline" to="/signup"> <button className='rounded-full md:w-[12rem] w-[8rem] h-[2rem] md:h-[3rem] text-white bg-[#3b82f6] mt-[1.5rem]'>Get Started</button></Link>
              </div>
              <div><img className='  mb-[3rem] md:w-[30rem] md:ml-0' src={heroimg} alt="Bitcoin image" /></div>
           </div>
            </div>

           
            </div>
           
        </div>

        <div className='flex items-center justify-center'>
        <div className='mt-[2rem] md:flex md:items-center gap-40 md:block hidden '>
          <div>
            <h1 className='text-[1.8rem]'>$3 Billion</h1>
            <p className='mt-[-0.8rem]'>Digital Currency Exchanged</p>
          </div>

          <div>
            <h1 className='text-[1.8rem] '>$2 Million +</h1>
            <p className='mt-[-0.8rem]'>Trusted Wallet investor</p>
          </div>

          <div>
            <h1 className='text-[1.8rem] '>70+</h1>
            <p className='mt-[-0.8rem]'>Supported Countries</p>
          </div>
        </div>
        </div>


       <div className='flex items-center justify-center md:hidden  sm:ml-0'>
       <div className='mt-[2rem] flex-row items-center justify-center  md:hidden  '>
          <div>
            <h1 className='text-[1.3rem] '>$3 Billion</h1>
            <p className='mt-[-0.4rem] text-[0.9rem]'>Digital Currency Exchanged</p>
          </div>

          <div>
            <h1 className='text-[1.3rem]  mt-[1.5rem]'>$2 Million +</h1>
            <p className='mt-[-0.4rem] text-[0.9rem]'>Trusted Wallet investor</p>
          </div>

          <div>
            <h1 className='text-[1.3rem] mt-[2rem]'>70+</h1>
            <p className='mt-[-0.4rem] text-[0.9rem]'>Supported Countries</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hero