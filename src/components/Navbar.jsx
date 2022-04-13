import React, { useContext } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from 'react-icons-kit'
import * as icons from 'react-icons-kit/icomoon'
import ProgressBar from "react-scroll-progress-bar";

function Navbar() {
    const { info } = useContext(ObjectContext);
    const social = info.social
    const socialMap = social.map((item, key) => {
        return(
            <a key={key} href={item.link} target="_blank" rel="noreferrer" >
                    <Icon className='hover:text-yellow-500 ease-in-out hover:scale-125 duration-300' size={18} icon={icons[item.icon]}/>
            </a>
        )
    })
  return (
    <>
        <div className='w-full md:fixed z-20 top-0 flex justify-center bg-zinc-900 py-4'>
            <nav className='flex justify-center md:justify-between w-full md:w-4/5 lg:w-3/5 content-center'>
                <div className='hidden md:block md:w-3/5 lg:w-2/5'>
                    <ul className='flex items-center justify-between font-bold'>
                        <li><Link to="#" smooth className='hover:text-yellow-500 ease-in-out hover:scale-125 duration-300'> Home </Link></li>
                        <li><Link to="#about" smooth className='hover:text-yellow-500 ease-in-out hover:scale-125 duration-300'> About </Link></li>
                        <li><Link to="#projects" smooth className='hover:text-yellow-500 ease-in-out hover:scale-125 duration-300'> Projects </Link></li>
                        <li><Link to="#contact" smooth className='hover:text-yellow-500 ease-in-out hover:scale-125 duration-300'> Contact </Link></li>
                    </ul>
                </div>
                <div className='flex items-center justify-between gap-8 md:gap-0 md:w-1/6'>
                    {socialMap}
                </div>
            </nav>
        </div>
        <ProgressBar bgcolor="#EAB308"/>
    </>
  )
}

export default Navbar