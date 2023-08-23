import React from 'react'
import heroimg from "../../assets/hero.png"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='md:ml-[7rem] justify-center items-center ml-[0.7rem]  '>
         <div className='flex gap-20 md:flex-row flex-col'>
           <div>
           <div>
                <div className='md:w-[27rem] w-[20rem] bg-[#e2e8f0] h-[2.7rem] rounded-full flex md:gap-16 items-center justify-center  '>
                <button className='bg-[#ffff] w-[9rem]  h-[2rem] rounded-full text-[0.9rem] font-extralight'>  Decent Nana Ledger </button>
                    <h3 className='pl-[1.2rem] font-[100]'>Smart investment</h3>          
                </div>
            </div>

            <div className='mt-[3rem] ml-[0.7rem] md:ml-0 '>
              <div className=''>
                <h1 className='md:text-[3.5rem] md:w-[30rem] text-[2.9rem] font-[100] '>WELCOME TO DECENT NANO LEDGER</h1>
                <p className='md:w-[25rem] mt-[2rem] text-[1.2rem] font-[100]'>Where all patriots are recommended to backup their digital assets and funds for the global event and blackout coming soon!</p>
                <Link className="hover:no-underline" to="/signup"> <button className='rounded-full w-[12rem] h-[3rem] text-white bg-[#3b82f6] mt-[1.5rem]'>Get Started</button></Link>
              </div>
              
           </div>
            </div>
            <img className='ml-[5rem] w-[14rem] md:w-[40rem] md:ml-0' src={heroimg} alt="Bitcoin image" />
        </div>

        <div className='mt-[2rem] md:flex md:items-center justify-center gap-40 md:block hidden '>
          <div>
            <h1 className='text-[2.1rem] font-bold'>$3 Billion</h1>
            <p className='mt-[-0.8rem]'>Digital Currency Exchanged</p>
          </div>

          <div>
            <h1 className='text-[2.1rem] font-bold'>$2 Million +</h1>
            <p className='mt-[-0.8rem]'>Trusted Wallet investor</p>
          </div>

          <div>
            <h1 className='text-[2.1rem] font-bold'>70</h1>
            <p className='mt-[-0.8rem]'>Supported Countries</p>
          </div>
        </div>


       <div className='flex items-center justify-center md:hidden ml-[30%] sm:ml-0'>
       <div className='mt-[2rem] flex-row items-center justify-center  md:hidden  '>
          <div>
            <h1 className='text-[2rem] font-semibold'>$3 Billion</h1>
            <p className='mt-[-0.4rem] text-[1.2rem]'>Digital Currency Exchanged</p>
          </div>

          <div>
            <h1 className='text-[2rem] font-semibold mt-[2rem]'>$2 Million +</h1>
            <p className='mt-[-0.4rem] text-[1.2rem]'>Trusted Wallet investor</p>
          </div>

          <div>
            <h1 className='text-[2rem] font-semibold mt-[2rem]'>70</h1>
            <p className='mt-[-0.4rem] text-[1.2rem]'>upported Countries</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hero