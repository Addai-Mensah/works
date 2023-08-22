import React from 'react'
import Sidebar from './sidebar'

function Layout({children, ...restProps}) {
  return (
      <div className='flex h-screen' {...restProps}>
          <div className="h-screen bg-red-400">
              <Sidebar/>
          </div>
          <div className="h-screen overflow-auto pl-2">
              {
                  children
              }
          </div>
    </div>
  )
}

export default Layout