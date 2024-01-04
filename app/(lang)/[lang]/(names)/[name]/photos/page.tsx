'use client'
import React from 'react'
import data from '@/public/both/photos.json'
import Image from 'next/image'
import './photos.css'
import NavInner from '@/components/NavInner'
import { PhotoData, pageProps } from '@/app/interfaces';
import Navbar from '@/components/Navbar';
import { useState } from 'react'
import Photo from '@/components/Photo'





const page:React.FC<pageProps> = ({params}) => {
    if (!(params.name == "muller" || params.name == "reiman" || params.name == "psankiewicz" || params.name == "christophe")){
        return(
          <div>
            <Navbar/>
          <div className = "relative text-center top-[100px] font-bold text-3xl">
          Content Unavailable 
          </div>
          </div>
        )
      }
    const album_data: PhotoData = data;
    const album = album_data[params.name];
    const [flip, setFlip] = useState(false);

    return(
<div className="">
    <Navbar/>
<div className = "sticky top-0 z-10">
        <NavInner name = "muller" tab = "photos" />
        </div>
	<div className="viewmaster">
    {
                album.map((value) => (
                    <Photo image={value.image} imageBack={value.imageBack} imageFront={value.imageFront} caption_EN={value.caption_EN} caption_FR={value.caption_FR} />
                   
                ))}
                </div>
                </div>
                )}



export default page