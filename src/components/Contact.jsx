import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const inputClasses = "rounded px-3 py-2 duration-300 ease-in-out focus:outline-none outline-none focus:text-black focus:bg-yellow-500 bg-zinc-900 placeholder:text-zinc-500 focus:placeholder:text-white " 


function Contact() {
  const form = useRef();
  const [showStatus, setShowStatus] = useState('hidden')
  const [messageSent, setMessageSent] = useState()
  
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        setMessageSent(true)
        setShowStatus('block')
      }, (error) => {
        setMessageSent(false)
        setShowStatus('block')
        console.log(error.text);
    });
    e.target.reset()
  }

  return (
    <div className='flex justify-center my-10 target:pt-[60px]' id="contact">
        <div className='flex flex-col w-5/6 md:w-2/5'>
            <h2 className='text-5xl md:text-6xl mb-10 font-bold text-center'>Get in touch</h2>
            <form className='flex flex-col gap-y-3 ' onSubmit={sendEmail} ref={form} >
                <input required type="text" name="name" placeholder='Your Name *' className={inputClasses}/>
                <input required type="email" name="email" placeholder='Your email *' className={inputClasses} />
                <input required type="text" name="subject" placeholder='Subject *' className={inputClasses} />
                <textarea required type="text" rows="5" name="message" placeholder='Message *' className={inputClasses} />
                <div className='self-center'>
                  <button className='rounded hover:bg-yellow-500 bg-zinc-800 text-zinc-500 hover:text-white font-bold text-xl py-2 px-3' type='submit'>Send</button>
                </div>
                <div className='self-center text-center'>
                  <div className={`${showStatus} duration-500 ease-in-out`}>
                    {messageSent ? <p className='text-green-600'>Got it, thanks.</p> : <p className='text-red-700'>Something went wrong, probably on my end, try messaging me on LinkedIn instead. Thanks</p>}
                  </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact