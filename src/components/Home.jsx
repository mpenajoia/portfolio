import React from 'react'
import { About, Navbar, Hero, Projects, Footer, Contact } from './index'

function Home() {
    
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home