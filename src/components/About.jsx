import React from 'react'
import AboutDetail from './AboutDetail'

function About() {
  return (
    <div className='w-full flex justify-center bg-zinc-800 py-4'>
        <div className='flex flex-col'>
            <h2>About</h2>
            <p>Description</p>
            <div>
                Skills, education, experience
            </div>
            <div>
                map through these
                <AboutDetail />
            </div>
        </div>
    </div>
  )
}

export default About