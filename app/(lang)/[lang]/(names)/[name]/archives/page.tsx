import React from 'react'
import {  pageProps, Archives } from '@/app/interfaces';
import Navbar from '@/components/Navbar';
import archive from '@/public/both/archives.json'
import NavInner from '@/components/NavInner';
import Archive from '@/components/Archive';


const page:React.FC<pageProps> = ({params}) => {
    if (!(params.name == "reiman" )){
        return(
          <div>
            <Navbar/>
          <div className = "relative text-center top-[100px] font-bold text-3xl">
            Content Unavailable 
          </div>
        </div>
        )
      }
      const data:Archives = archive;
      
  return (
    <div>
        <Navbar/>
        <div className = "top-0 sticky z-[100]">
            <NavInner name = {params.name} tab='archives'/>

        </div>
    {
        data[params.name].map((value, index) => (
           <Archive {...value} lang = {params.lang} left = {index%2 ==0}  />

        ))
    }
    </div>
  )
}

export default page