import React from 'react'
import register from "../../assets/signup.png"
import add from "../../assets/add.png"
import secure from "../../assets/secure.png"
function Why() {
  return (
    <div>
        <div className='flex items-center justify-center flex-wrap mt-[8rem] md:ml-0 '>
           <div>
           <h1 className='text-center text-[2.2rem] font-bold'>Why Decent Nano Ledger</h1>
            <p className='text-center md:w-[24rem] w-[23rem] md:px-0 pl-[1rem]  text-[1.1rem]'>The development and management of a large scale investment portfolio is an incredibly complicated endeavour.Notwithstanding, the system that we have developed consists of three simple steps simple steps if we look at it from your perspective</p>
           </div>
        </div>

        <div className=''>
        <div className='flex items-center justify-center mt-[3rem] md:flex-row gap-3 flex-col md:ml-0 ml-[2rem]  '>
          <div className='w-[20rem] bg-[#3671e9] md:h-[25rem] h-[25rem]  rounded-lg'>
            <img className='rounded-full w-[6rem] mx-auto mt-[3rem] ' src={register} alt="" />
            <h1 className='text-center my-[1.5rem] text-white font-bold text-[1.5rem]'>High Reliability</h1>
            <p className=' text-center text-white  text-[1.2rem] px-[2%] '>We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks</p>
          </div>

          <div className='w-[20rem] bg-[#e5e7eb] md:h-[25rem] h-[25rem]  rounded-lg'>
            <img className='rounded-full w-[6rem] mx-auto mt-[3rem] ' src={add} alt="" />
            <h1 className='text-center my-[1.5rem]  font-bold text-[1.5rem]'>Safe and Secure</h1>
            <p className=' text-center  text-[1.2rem] px-[2%] '>Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business. We are legal and safe.</p>
          </div>

          <div className='w-[20rem] bg-[#e5e7eb] md:h-[25rem] h-[25rem] rounded-lg'>
            <img className='rounded-full w-[7rem] mx-auto mt-[4rem] ' src={secure} alt="" />
            <h1 className='text-center my-[1.5rem]  font-bold text-[1.5rem]'>Priority Service</h1>
            <p className=' text-center   text-[1.2rem] px-[2%] '>We provide 24/7 customer support through email and telegram. Our support representatives are pefriodically available to help you through any difficulty</p>
          </div>

         
        </div>
        </div>
    </div>
  )
}

export default Why