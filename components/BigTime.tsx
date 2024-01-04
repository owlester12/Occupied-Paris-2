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


interface BigTimeProps{
    year: number
    month?: number | string
    day?: number | string
    text: string
    img: string
    setDate: (day: string) => void
    num: number
    setYear: (year: number) => void
    setWhite: (val: boolean) => void
    theref:React.RefObject<Element | Document | null | undefined>;
}

const BigTime: React.FC<BigTimeProps> = ({year, month, day, text, img, setDate, setYear, num, setWhite, theref}) => {
    const ref:any = useRef();

    const {entry} = useIntersectionObserver(ref, {"threshold": 0.0});

    
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if(entry?.isIntersecting){
          setDate(month + "/" + day + "/" + year);
          setYear(year);
          setWhite(true);
        } else {
            setWhite(false);
        }


    
    },[entry])

    
    
        return (
            <ParallaxLayer offset = {0.8 + num} speed = {0.5} >
            <div ref= {ref}  className = {`z-10 w-[130vw] h-[130vh] ${img}`}>
                <p  className = {`text-4xl text-center text-white ${c.className} bottom-[10%] absolute`}> {text}</p>
            </div>
    
        </ParallaxLayer>
  )
}

export default BigTime