import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faTreeCity, faLocationDot, faUsersLine, faTruck } from "@fortawesome/free-solid-svg-icons";

const HeroCard = ({icon, label}) => {
  return (
    <div className='flex flex-col h-full w-36 px-4 items-center justify-center hover:shadow-xl rounded-lg text-cyan-500'>
         <FontAwesomeIcon icon={icon} size="3x" />
         <p className=' text-center pt-2'>{label}</p>
    </div>
  )
}

export default HeroCard