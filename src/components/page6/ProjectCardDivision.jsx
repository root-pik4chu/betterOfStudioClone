import React from 'react'
import Card from './Card'
import { AnimatePresence, motion } from 'framer-motion'

const ProjectCardDivision = () => {
  return (
    <div
    className='w-full h-auto grid grid-cols-1'
    >
      {/* card */}
      <AnimatePresence>
      <motion.div className="w-full grid grid-cols-3 gap-[1vw] gap-y-[3vw] pb-[10vh]"
         initial={{y:"5%" , opacity:0}}
         animate={{y:"0%" , opacity:1}}
         exit={{y:"10%" , opacity:0}}
         transition={{duration:1.5 , type:"spring"}}
      >

        
        
        
        <Card />
        <Card />
        

      </motion.div>
      </AnimatePresence>
      
    </div>
  )
}

export default ProjectCardDivision
