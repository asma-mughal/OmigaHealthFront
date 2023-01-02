import React from 'react'
import { whatsapp } from '../assets'

const Bot = () => {
  return (
    <div 
    className="fixed bottom-5 sm:right-8 right-4 z-[999]
     cursor-pointer text-white text-4xl 
     border-0 border-transparent
     w-14 h-14 flex items-center justify-center rounded-full animate-bounce"
     style={{
      backgroundColor:'#7DD3FC'
     }}
     >
       <a href="https://web.whatsapp.com://send?text=This is whatsapp sharing example using button" 		
       data-action="share/whatsapp/share"
		target="_blank">  <img src={whatsapp} className="w-5 h-5" /></a> 
      
    
    </div>
  )
}

export default Bot
