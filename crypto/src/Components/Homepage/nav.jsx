import React from 'react'
import logo from "../../assets/download.png"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <Link className="hover:no-underline" to="/"><img className='md:mx-[7rem] md:my-[2rem] my-[2rem] mx-[1rem] w-[3rem]' src={logo} alt="" /></Link>
    </div>
  )
}

export default Nav