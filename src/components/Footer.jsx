import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className='flex justify-between items-center mt-16 p-8 text-white bg-slate-900'>
    <div>
        <p className='text-4xl font-bold' >LOGO</p>
        <p className='text-xs mt-2'>Alrights Reserved</p>
    </div>
    <div className='flex flex-col items-end'>
        <div className='flex gap-2 md:gap-8 text-sm md:text-base' >
            <Link to="#">Privacy Statement</Link>
            <Link to="#">Legal Notice</Link>
            <Link to="#">FAQs</Link>
            <Link to="#">Contact Us</Link>
        </div>
        <div className='flex gap-2 mt-4 text-slate-900' >
        <FontAwesomeIcon icon={faFacebookF} className=' rounded-full w-4 p-2 bg-white'/>
        <FontAwesomeIcon icon={faTwitter} className='rounded-full w-4 p-2 bg-white'/>
        <FontAwesomeIcon icon={faInstagram} className='rounded-full w-4 p-2 bg-white'/>
        </div>
    </div>
  
    </footer>
  )
}

export default Footer