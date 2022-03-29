import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center my-10'>
        <div className='flex flex-col w-2/5'>
            <h2 className='text-4xl font-bold my-2'>Get in touch</h2>
            <form className='flex flex-col gap-y-3'>
                <input required type="text" name="name" placeholder='Your Name *' className='rounded px-3 py-2 focus:outline-none bg-zinc-900 placeholder:text-zinc-500 '/>
                <input required type="text" name="email" placeholder='Your email *' className='rounded px-3 py-2 focus:outline-none bg-zinc-900  placeholder:text-zinc-500 '/>
                <input required type="text" name="subject" placeholder='Subject *' className='rounded px-3 py-2 focus:outline-none bg-zinc-900  placeholder:text-zinc-500 '/>
                <textarea required type="text" rows="5" name="message" placeholder='Message *' className='rounded px-3 py-2 focus:outline-none bg-zinc-900  placeholder:text-zinc-500 '/>
            </form>
        </div>
    </div>
  )
}

export default Contact