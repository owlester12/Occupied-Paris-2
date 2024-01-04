'use-client'

import React from 'react'
import { Photo } from '@/app/interfaces'
import { useState } from 'react';
import Image from 'next/image';

const Photo:React.FC<Photo> = ({ image, imageFront, imageBack, caption_EN, caption_FR}) => {
    const [flip, setFlip] = useState(false);

    return (
    <div>
        
    {imageFront &&
    <div className='block text-center'>
     <div className = "px-10 py-2 rounded-full bg-white text-base font-bold inline cursor-pointer" onClick = {() => setFlip(!flip)}> Flip </div>
     </div>}
    <div className = " rounded-2xl p-5 mb-10 t carousel-cell relative">
       {image && <Image src = {image} fill objectFit='contain' alt = "image" className = "mover" />}



       {imageFront && !flip && <Image src = {imageFront} fill objectFit='contain' alt = "image" className = "mover" />}
       {imageBack && flip && <Image src = {imageBack} fill objectFit='contain' alt = "image" className = "mover" />}

        <p className = "bottom-[0px] absolute py-[5px] text-center text-sm reveal">
        {imageBack === "fr" ? caption_FR : caption_EN}</p>

        </div>
        </div>
  )
}

export default Photo