'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import LanguageIcon from '@mui/icons-material/Language';


const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.split("/")[1];

  const changeLang = () => {

    const segs = pathname.split("/");
    if(segs[1] == "en"){

      segs.splice(1, 1, "fr");
      router.push(segs.join("/"));

    } else {
      segs.splice(1, 1, "en");
      router.push(segs.join("/"));
    }


  }
  
  return (
    <div className = "flex top-0 z-50 bg-white py-2 md:px-10 justify-between px-5 border-b border-gray-50 ">
     <Link href={"/" + lang + "/"}>
        <div className ="flex flex-col lg:flex-row lg:items-center cursor-pointer text-black blue-button transition duration-500  ease-out">

        <p className = "font-semibold text-lg sm:text-xl md:text-2xl  ">{lang == "fr" ? "Atelier De Reprise" : "Stitching the Fragmented"}</p>
        <p className = "font-extralight text-xs sm:text-sm md:text-md lg:px-5  "> {lang == "fr" ? "Paris sous l'Occupation et la Shoah" : "WWII Paris and the Shoah"}</p>

        </div>
        
        </Link>
        <div className = "flex gap-x-4 sm:gap-x-6 lg:gap-x-10 items-center">
        <Link href = {"/" + lang + "/map"}>
            <div className = "button">
            
              {lang == "fr" ? "Carte" : "Map"}
              </div>
              </Link>
              <Link href = {"/" + lang + "/atlas"}>
            <div className = "button">
              Atlas
            
              </div>
              </Link>
              <Link href = {"/" + lang + "/about"}>
            <div className = "button">
              {lang == "fr" ? "Le Project" : "About"}

              </div>
              </Link>
            <div className="blue-button transition duration-500  ease-out" onClick = {changeLang}> <LanguageIcon /></div>
        </div>
    </div>
  )
}

export default Navbar