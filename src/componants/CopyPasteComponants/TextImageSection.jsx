// import React from 'react'

// const TextImageSection = () => {
//   return (
//     <div>
//       <div className="w-full h-[150vh] bg-zinc-900 text-white flex flex-col">
//          <div className="one w-full h-[40vh] sm:h-[35vh] p-4 block sm:flex">
//             <div className="w-full sm:w-[40%] h-[40%] sm:h-full block font-medium  order-1">
//                <div className="flex items-center gap-1 sm:text-[1.2vw] text-[5.5vw]">
//                <div className="w-[4vw] h-[4vw] sm:w-[1vw] sm:h-[1vw] bg-white rounded-full"></div>
//                <p> CONCIERGE CREATIVE</p> 
//                </div>
//                <p className='sm:text-[1.2vw] text-[5.5vw]'>(BO® — 03)</p>

//             </div>
//             <div className="w-full sm:w-[60%] h-[60%] sm:h-[full] sm:text-[3.2vw] text-[5.5vw] leading-none  order-3">
//             <div className="one"><p>Superior brands require sophisticated</p></div>
//             <div className="one"><p>capabilities that many businesses couldn't</p></div>
//             <div className="one"><p>access until now.</p></div>


//             </div>
//          </div>
//          <div className="w-full h-[15vh] sm:h-[46vh] flex items-center justify-center order-2">
//             <p className="text-[28vw] sm:text-[29vw] font-['ff'] leading-none">SERVEICES</p>
//          </div>
//          <div className="">


//          </div>
//       </div>
      
//     </div>
//   )
// }
  
// export default TextImageSection




import React from 'react'

const TextImageSection = () => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
   {/* Item 1: Wide on larger screens */}
   <div className="order-2 sm:order-1 lg:order-4 sm:col-span-1 lg:col-span-2 bg-blue-500 p-4 text-white">
     Item 1
   </div>
   
   {/* Item 2: Full width on mobile, two columns on tablet, three columns on desktop */}
   <div className="order-3 sm:order-3 lg:order-2 sm:col-span-2 lg:col-span-3 bg-green-500 p-4 text-white">
     Item 2
   </div>
   
   {/* Item 3: Tall item on larger screens */}
   <div className="order-1 sm:order-2 lg:order-3 sm:col-span-1 lg:col-span-1 lg:row-span-2 bg-red-500 p-4 text-white">
     Item 3
   </div>

   {/* Item 4: Full-width on mobile, one column on tablet, repositioned on desktop */}
   <div className="order-5 sm:order-5 lg:order-1 sm:col-span-1 bg-yellow-500 p-4 text-white">
     Item 4
   </div>

   {/* Item 5: Repositions and spans multiple columns */}
   <div className="order-4 sm:order-4 lg:order-5 lg:col-span-2 bg-purple-500 p-4 text-white">
     Item 5
   </div>

   {/* Item 6: Positioned last across all breakpoints */}
   <div className="order-6 sm:order-6 lg:order-6 bg-pink-500 p-4 text-white">
     Item 6
   </div>
 </div>
  )
}

export default TextImageSection



