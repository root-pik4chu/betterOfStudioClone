import React from 'react'
import Marquee from '../page_1/Marquee'

const Page8 = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-zinc-200 flex flex-col justify-between'>
      <div className="">
      <Marquee />
      <div className="w-full h-[1px] bg-zinc-50"></div>
      </div>
      <footer className="w-full bg-zinc-800 text-zinc-200 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 BetterOff Studio. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
            <a href="/contact" className="text-sm hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page8 
