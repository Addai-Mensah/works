import React from 'react'
import btc from "../../assets/btc.png"
import metamask from "../../assets/metamask.png"
import trustwallet from "../../assets/trustwallet.png"
import Head from './head'
import Dashboardtable from './dashboardtable'
import Transaction from './transaction'
import Layout from './Layout'
import axios from 'axios'

function Dashboardhome() {

   const user = JSON.parse(sessionStorage.getItem('user'))

   const [coins, setcoins] = useState([])

   useEffect(() => {
      const timer = setTimeout(() => {
         axios.get(`http://localhost:10000/api/user/coins/${user?._doc?._id}`)
            .then(res => {
               setcoins(res.data)
            })
            .catch(err => {
               console.log(err)
            })
      }, 3000)

      return () => clearTimeout(timer)
   }, [])


   return (
      <Layout>
         <div>
            <Head />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
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



            </div>
            {/* <Transaction /> */}
            <Dashboardtable />
         </div>
      </Layout>
   )
}

export default Dashboardhome