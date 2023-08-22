import React from 'react'
import why from "../../assets/why.png"

function Chooseus() {
  return (
    <div>
        <div className='flex max-[300px]:ml-[14rem] ml-[1rem] md:mt-[3rem] mt-[5rem] gap-20  md:flex-row flex-col-reverse'>
            <img className='md:w-[40vw] w-[14rem] ml-[5rem] ' src={why} alt="" />

            <div className='  '>
                <div>
                <h1 className='md:text-[2.5rem] md:w-[30rem] md:mt-[7rem] text-[2rem] font-[500] leading-10'>Why you  should choose CRAPPO</h1>
                <p className='md:w-[33vw] mt-[1rem] text-[1.2rem]'>We offer top-notch security to keep your assets safe. Adiverse selection of cryptocurrencies for trading. Our interface is an easy-to-use for seamless trading.We offer competetive fee for seamless trading.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chooseus