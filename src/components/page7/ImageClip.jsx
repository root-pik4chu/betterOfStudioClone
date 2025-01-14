import { motion } from 'framer-motion'
import React from 'react'

const ImageClip = () => {
  return (
    <div>
      <div className="felx items-center justify-center  overflow-hidden">
         <div className="relative w-[30vw] h-[20vw] object-cover">
            <motion.img
               initial={{clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}}
               whileInView={{
                  clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
               }}
               transition={{duration:1.5 , ease:"easeInOut"}}
               viewport={{once:true }}
            src="https://images.unsplash.com/photo-1721333089418-faead19e3654?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
      </div>
    </div>
  )
}

export default ImageClip
