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
            </div>

            <Users />
          
         </div>
      </Layout>
   )
}

export default AdminDashboardhome