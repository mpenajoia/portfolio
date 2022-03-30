import React from 'react'
import { ImLinkedin2, ImGithub, ImCamera } from 'react-icons/im'

function Navbar() {
  return (
    <div className='w-full fixed z-10 flex justify-center bg-zinc-800 py-4'>
        <nav className='flex justify-between w-3/4 content-center'>
            <div className='w-1/3'>
                <ul className='flex items-center justify-between'>
                    <li>
                        <a href='#'>
                            Home        
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            About        
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Projects        
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Contact        
                        </a>
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