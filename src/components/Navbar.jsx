import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ImLinkedin2, ImGithub, ImCamera } from 'react-icons/im'

function Navbar() {
  return (
    <div className='w-full fixed z-10 flex justify-center bg-zinc-800 py-4'>
        <nav className='flex justify-between w-2/3 content-center'>
            <div className='w-1/3'>
                <ul className='flex items-center justify-between'>
                    <li>
                        <Link to="#" smooth> Home </Link>
                    </li>
                    <li>
                        <Link to="#about" smooth> About </Link>
                    </li>
                    <li>
                        <Link to="#projects" smooth> Projects </Link>
                    </li>
                    <li>
                        <Link to="#contact" smooth> Contact </Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-between w-1/6'>
                <a href='#'>
                    <ImLinkedin2 />
                </a>
                <a href='#'>
                    <ImGithub />
                </a>
                <a href='#'>
                    <ImCamera />
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar