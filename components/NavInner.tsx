'use client'
import React from 'react'
import Link from 'next/link';
import { Home, Correspondence, PhotoData, Archives } from '@/app/interfaces';
import homepage from '@/public/both/homepage.json'
import correspond from '@/public/both/correspondence.json'
import data from '@/public/both/photos.json'
import archives from '@/public/both/archives.json'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';






interface navProps{
    "name": string;
    "tab": string;
    "threed"?: boolean;
    "setThreeD"?: (val:boolean) => void;
}



const NavInner:React.FC<navProps>  = ({name, tab, threed, setThreeD}) => {
    const homep: Home = homepage;
    const correspondence: Correspondence = correspond;
    const real_data: PhotoData = data;
    const [select, setSelect] = useState(false);
    const archive:Archives = archives;
    const pathname = usePathname();
    const lang = pathname.split("/")[1];



    const handleHover = (val:string) => {
       /* router.push(`/${name}#${val}`);*/

        const targetElement = document.querySelector('#'+val);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: "end"
          });
        }
      };


  return (
    <div className = {` bg-white md:bg-opacity-70 md:backdrop-blur-sm  ${select ? "bg-opacity-100": "bg-opacity-70 backdrop-blur-sm"}`}>
        <div className = "z-50 py-2 px-16 md:hidden " onClick = {() => setSelect(!select)}>
            <MenuIcon className = "cursor-pointer"/>

        </div>
    <div className = {`md:flex z-50 py-2 px-10 md:justify-between  flex-col md:flex-row absolute md:relative md:bg-opacity-0   ${select ? "flex bg-white w-full gap-y-3 items-center ": "hidden"} `}>
            <Link href = {`/${lang}/${name}`}>
            <div className = "nav-button">
                
            Biography

            </div>
            </Link> 
        { "timeline" in homep[name] &&  
            <Link href = {`/${lang}/${name}/timeline`}>
        <div className = {`nav-button ${tab === "timeline" ?  "nav-select" : ""}`}>
            {lang == "fr" ? "La Chronologie" : "Timeline"}

        </div>
        </Link>}

        {"map" in homep[name] && <Link href = {`/${lang}/${name}/map`}>
        <div className = {`nav-button ${tab === "map" ?  "nav-select" : ""}`}>
            
            {lang == "fr" ? "Carte" : "Map"}
        </div>
        </Link>}

        {"testimony" in homep[name] && <Link href = {`/${lang}/${name}/testimony`}>
        <div className = {`nav-button ${tab === "testimony" ?  "nav-select" : ""}`} >
           
            {lang == "fr" ? "Temoignage" : "Testimony"}
        </div>
        </Link>}

        {name in correspondence && <Link href = {`/${lang}/${name}/correspondence`}>
        <div className = {`nav-button ${tab === "correspondence" ?  "nav-select" : ""}`}>
       
            Correspondence
        </div>
        </Link>}

        {"blog" in homep[name] && <Link href = {`/${lang}/${name}/blog`}>
        <div className = {`nav-button ${tab === "blog" ?  "nav-select" : ""}`}>
            Blog
        </div>
        </Link>}
        {name in archive && <Link href = {`/${lang}/${name}/archives`}>
        <div className = {`nav-button ${tab === "archives" ?  "nav-select" : ""}`}>
       
            Archives
        </div>
        </Link>}

        {name in real_data && <Link href = {`/${lang}/${name}/photos`}>
        <div  className = {`nav-button ${tab === "photos" ?  "nav-select" : ""}`}>
            Photo Gallery
        </div>
        </Link>}

        {
            setThreeD &&
          <a>
          <div className = "nav-button"
            onClick = {() => setThreeD(!threed)}>
                {threed ? "3-D" : "2-D"}
                </div>
                </a>
        }
    </div>
    </div>
  )
}

export default NavInner;