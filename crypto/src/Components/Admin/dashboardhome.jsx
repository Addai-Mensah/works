import React from 'react'
import btc from "../../assets/btc.png"
import metamask from "../../assets/metamask.png"
import trustwallet from "../../assets/trustwallet.png"
import Head from './head'
import Layout from './Layout'
import Users from './Users'

function AdminDashboardhome() {


   return (
      <Layout>
         <div className='w-full'>
            <Head />
            <div className='flex flex-row justify-between items-center w-full pr-10'>
               <h1 className='text-xl font-bold'>Users</h1>
               <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Create User
               </button>
            </div>

            <Users />
            <div className='flex flex-row justify-between items-center w-full pr-10'>
               <h1 className='text-xl font-bold'>Coins</h1>
               <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Create Coin
               </button>
            </div>
            <Users />
         </div>
      </Layout>
   )
}

export default AdminDashboardhome