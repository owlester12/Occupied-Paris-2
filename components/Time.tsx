'use client';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import React, { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@react-hooks-library/core';
import Image from 'next/image';
import { Special_Elite } from 'next/font/google'

const c  = Special_Elite ({
    style: ['normal'],
    weight: '400',
    subsets: ['latin']
})




interface TimeProps{
    year: number
    month?: number | string
    day?: number | string
    time?: string
    endYear?: number | string
    endMonth?: number | string
    endDay?: number | string
    endTime?: string 
    headline: string |undefined
    text: string | undefined
    img?: string
    imgCredit?: string
    imgCaption?: string
    setDate: (day: string) => void
    num: number
    setYear: (year: number) => void
    rand:number

}

const Time:  React.FC<TimeProps> = ({year, month, day, time, endYear, endMonth, endDay, endTime, headline, text, img, imgCredit, imgCaption, setDate, num, setYear,rand}) => {
    const ref:any = useRef();
    const {entry} = useIntersectionObserver(ref);
    useEffect(() => {
        if(entry?.isIntersecting){
          setDate(month + "/" + day + "/" + year);
          setYear(year);
        }},[entry])



    return ( <> 
    <ParallaxLayer offset = {0.8 + num} style={{left: '60%', width: '30%'}} speed = {0.5} className='z-[100]' >
        <div ref= {ref} className = "z-10 w-[150%] right-[40%] relative sm:right-0 sm:w-full ">
            <p className = {`font-bold text-2xl font-serif`}>{headline}</p>
            <p className = {`text-base ${c.className}`}> {text}</p>
        </div>

    </ParallaxLayer>
    { img != undefined && img != "" &&  
    <ParallaxLayer offset = {0.7+num} style ={{left: `${1 + rand*25}%`, width: "35%"}} speed = {0.3}>
        <div className = "sm:w-full h-full sm:right-0 right-[15vw] w-[80%]  ">
        <img src = {img}  alt = "Image"  />
        </div>
    </ParallaxLayer>

    }
    </>
  )
}

export default Time