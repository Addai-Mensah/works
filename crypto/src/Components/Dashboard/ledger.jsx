import React, { useState, useRef, useEffect } from 'react';
import logo from "../../assets/xlm.png"
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { cryptoLinks } from '../../../constants/constant'
import { useDisclosure } from '@chakra-ui/react'
import Newcard from './newcard'
import Sidebar from './sidebar';
import Layout from './Layout';
function Ledger() {
  const [isloading, setIsLoading] = useState(false)

  const [message, setMessage] = useState(false)

  const handleputChange = (e) => {
    setIsLoading(true)
    setMessage("true")

    setTimeout(() => {
      setIsLoading
    }, 4000)
  }



  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.7 }
    );
    tl.fromTo(
      heroRef.current.querySelector('.hero__title'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    );
    tl.fromTo(
      heroRef.current.querySelector('.hero__subtitle'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.3'
    );

  }, []);



  return (
    <Layout>
    <div className='flex'>

      <div>

        <div className='py-3 hero' >
          <div className='flex items-center justify-center w-full boxshadows'>
            <Link to="/"><img className="w-[3rem]" src={logo} alt="" /></Link>
          </div>
        </div>


        <div className="flex items-center justify-center" ref={heroRef}>
          <div className="mb-[3rem]">
            <div className="flex items-center justify-center">
              <h1 className="hero__title font-link mx-auto font-bold text-[2.7rem]">Connect Wallet</h1>
            </div>
            <p className="hero__subtitle font-link text-[0.8rem] sm:text-[1.1rem] hidden sm:block">Open protocol for connecting Wallets to <br /> <span className="flex items-center justify-center">Dapps</span></p>
            <p className="sm:hidden font-link pl-4">Open protocal for connecting wallet to <br /> <span className="flex items-center justify-center">Dapps</span></p>
          </div>
        </div>
        <div className='flex items-center justify-center md:mx-[5rem] mx-[2rem] flex-wrap  gap-14'>
          {cryptoLinks.map((coins, index) => (
            <Newcard item={coins} key={index} />
          ))}
        </div>


      </div>
      </div>
    </Layout>

  )
}

export default Ledger