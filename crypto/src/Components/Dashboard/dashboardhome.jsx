import React from 'react'
import btc from "../../assets/btc.png"
import metamask from "../../assets/metamask.png"
import trustwallet from "../../assets/trustwallet.png"
import Head from './head'
import Dashboardtable from './dashboardtable'
import Transaction from './transaction'
import Layout from './Layout'
import xrp from "../../assets/xrp.png"
import xlm from "../../assets/xlm.png"
import xdc from "../../assets/xdc.png"
import tron from "../../assets/tron.png"
import solana from "../../assets/solana.jpeg"
import bnb from "../../assets/bnb.jpeg"

function Dashboardhome() {

   const user = JSON.parse(sessionStorage.getItem('user'))
   
   return (
      <Layout>
         <div>
            <Head />
            {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
               {
                  user?._doc?.coins?.length > 0 ? 
                     user?._doc?.coins?.map((item) => (
                        <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={item.logo} className='w-[3rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>{item?.coinType}</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance  : ${item?.balance}</h1>
                              </div>
                           </div>
                        </div>
                     ))
                     : 
                     <h1>loading ...</h1>
               }
             

            
            </div> */}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={xrp}  className='w-[2rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>XRP</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance: $0</h1>
                              </div>
                           </div>
                        </div>


                        <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={xlm} className='w-[2rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>XLM</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance: $0</h1>
                              </div>
                           </div>
                        </div>


                        <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={xdc}  className='w-[2rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>XDC</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance: $0</h1>
                              </div>
                           </div>
                        </div>


                        <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={tron}  className='w-[2rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>TRON</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance: $0</h1>
                              </div>
                           </div>
                        </div>


                        <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={solana}  className='w-[2rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>SOLANA</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance: $0</h1>
                              </div>
                           </div>
                        </div>

                        <div className='col-span-1 border-2 boxshadow  h-[8rem] flex  items-center '>
                           <div className='flex gap-4  items-center justify-center ml-[1rem]'>
                              <img src={bnb}  className='w-[2rem]' alt="logo" />
                              <div>
                                 <h1 className='text-[#00000090] text-[1rem] font-bold'>BNB</h1>
                                 <h1 className='text-[#00000090] text-center font-bold'>Balance: $0</h1>
                              </div>
                           </div>
                        </div>
            </div>
            {/* <Transaction /> */}
            <Dashboardtable />
         </div>
      </Layout>
   )
}

export default Dashboardhome