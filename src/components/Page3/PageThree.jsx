
import React from 'react'
import GridSection from './GridSection'
import NayaWalaPageThree from './NayaWalaPageThree'

const PageThree = () => {


  const data = [
    {
      name: " strategy",
      data: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements. ",
      buttons : [" brand identify", "brand guidence " , "ui ux design "]
    },
    {
      name: " strategy",
      data: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements. ",
      buttons : [" brand identify", "brand guidence " , "ui ux design "]
    },
    {
      name: " strategy",
      data: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements. ",
      buttons : [" brand identify", "brand guidence " , "ui ux design "]
    },
    {
      name: " strategy",
      data: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements. ",
      buttons : [" brand identify", "brand guidence " , "ui ux design "]
    },
  ]


  return (
    <div className='w-full  h-auto bg-red-400'>
      {/* <GridSection /> */}
      <NayaWalaPageThree items={data} />
    </div>
  )
}

export default PageThree




