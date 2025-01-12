import React from 'react'
import ButtonWithAnimations from './ButtonWithAnimations'
import SwitchDivisions from './SwitchDivisions'
import SubscriptionCardsDiv from './SubscriptionCardsDiv'
import KyuBhai from './KyuBhai'


const PageSix = () => {

  // handle click on click 

  return (
    <div>
      <div className="w-full sm:h-auto  relative" >
        <div className="w-full  sm:h-[10vh]  pt-5 px-10">
          <div className=" sm:h-full grid sm:grid-cols-12 items-center sm:text-[1.3vw]">
            <h1 className='col-start-1 items-center '>● PLANS</h1>
            <h1 className='col-start-6 items-center '>(BO® — 06)</h1>
            <h1 className='col-start-11 col-span-2 items-center '>ADD-TO-CART CREATIVE</h1>
            <h1></h1>
          </div>
        </div>
        
        <div className="w-full h-auto px-10 ">
        <ButtonWithAnimations />
        <SubscriptionCardsDiv />
        {/* <KyuBhai /> */}

        
        {/* <SwitchDivisions /> */} 
        </div>
                  
      </div>
    </div>
  )
}

export default PageSix
