import React from 'react'
import pic from '../public/images/service.jpg'
import Image from  "next/image"
export default function ServiceTiles() {
  return (
      <header>
    <div className='head'>
        <Image
        src={pic}
        width={500}
            height={300}
            alt="background"
            layout="responsive"
        priority
        />
         <div class="bottomleft">
             <h4>01</h4>
           <h3>RENOVATION</h3>
           </div>
    </div>
    </header>
  )
}
