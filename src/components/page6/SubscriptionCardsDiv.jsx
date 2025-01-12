import React from 'react'
import Card from './card'

const SubscriptionCardsDiv = () => {
  return (
    <div
    className='w-full h-auto grid grid-cols-1'
    >
      {/* card */}
      <div className="w-full  grid grid-cols-3 gap-[1vw] gap-y-[3vw] pb-[10vh]">

        
        
        
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      
    </div>
  )
}

export default SubscriptionCardsDiv
