import React from 'react'
import comp from "../../assets/comp.png"
import { Link } from 'react-router-dom'
import bye from "../../assets/goodby.png"


function Security() {
  return (
    <div>
       <div className='flex max-[300px]:ml-[14rem] ml-[1rem] md:mt-[3rem] mt-[5rem] gap-20  md:flex-row flex-col-reverse mb-[7rem]'>
            <img className='md:w-[40vw] w-[13rem] ml-[5rem] ' src={bye} alt="" />

            <div className='  '>
                <div>
                <p className='md:text-[3rem] leading-14 md:w-[35rem]  text-[2rem] font-[100] md:mt-[4rem] '> Say goodby to complicated statements</p>
<p className='md:w-[25rem] md:mt-[2rem] mt-[1rem] text-[1.2rem] font-[100]'>Easy to read account statements that let you keep track of your investments. We  make everything easy for you!</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Security