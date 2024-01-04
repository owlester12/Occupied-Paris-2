'use client'
import React, { useEffect } from 'react'
import { ArchivesProp } from '@/app/interfaces'
import Image from 'next/image'
import { useRef } from 'react'


const Archive:React.FC<ArchivesProp> = ({imageFront, imageBack, name, title_EN, title_FR, caption_EN, caption_FR, left}) => {
    return (
    <div>
        <div className = "">
        <div className = {`relative h-[40vh] w-[40vw] hover:h-[65vh] hover:w-[50vw] duration-500 m-[30px] ${left ? "mr-auto ml-[5vw]": "ml-auto mr-[5vw]"} `} >
            <img  src = {imageFront} alt = "Image"  className= {`object-contain max-h-[100%] max-w-[100%] ${left ? "mr-0 ml-auto": "ml-0 mr-auto"}`}/>
            <p className= {`text-xs text-center `}>{caption_EN}</p>

        </div>
        </div>
    </div>
  )
}

export default Archive