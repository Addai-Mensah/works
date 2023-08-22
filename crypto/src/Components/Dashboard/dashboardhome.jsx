import React from 'react'
import btc from "../../assets/btc.png"
import metamask from "../../assets/metamask.png"
import trustwallet from "../../assets/trustwallet.png"
import Head from './head'
import Dashboardtable from './dashboardtable'
import Transaction from './transaction'

function Dashboardhome() {

   
  return (
    <div className=''>
       <Head/>
        <h1 className='my-[2.5rem] font-bold'>Dashboard</h1>
        <div className=' flex justify-center gap-5 flex-col md:flex-row'>
            <div className='md:w-[23rem]  w-[67vw] border-2 boxshadow  h-[8rem] flex  items-center '>
               <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                <img src={btc} alt="bitcoin" />
                <div>
                <h1 className='text-[#00000090] text-[1rem] font-bold'>Bitcoin</h1>
                <h1 className='text-[#00000090] text-center font-bold'>Total $400</h1>
                </div>
               </div>
            </div>

            <div className='md:w-[23rem] w-[67vw] border-2 boxshadow  h-[8rem] flex  items-center '>
               <div className='flex gap-4 items-center justify-center ml-[1rem]'>
                <img src={metamask} alt="metamask" />
                <div>
                <h1 className='text-[#00000090] text-[1rem] font-bold'>MetaMask</h1>
                <h1 className='text-[#00000090] text-center font-bold'>Total $800</h1>
                </div>
               </div>
            </div>

            <div className='md:w-[23rem] w-[67vw]  border-2 boxshadow  h-[8rem] flex  items-center '>
               <div className='flex gap-4 items-center justify-center ml-[1rem]'>
                <img className='w-[2.5rem]' src={trustwallet} alt="trustwallet" />
                <div>
                <h1 className='text-[#00000090] text-[1rem] font-bold'>Trust Wallet</h1>
                <h1 className='text-[#00000090] text-center font-bold'>Total $2000</h1>
                </div>
               </div>
            </div>
        </div>
        <Transaction/>
        <Dashboardtable/>
    </div>
  )
}

export default Dashboardhome