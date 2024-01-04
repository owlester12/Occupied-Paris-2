'use client';
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

interface NavProps{
  tab: string;
}

const Nav2:React.FC<NavProps> = ({tab}) => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];


  
  return (
    <div className = "flex z-50 py-2 md:px-10 justify-center px-5 bg-white bg-opacity-70 backdrop-blur-sm gap-10">

<Link href = {"/" + lang + "/about"}>
    <div className = {`nav-button ${tab === "The Project" ?  "nav-select" : ""}`}>
       
         {lang == "fr" ? "Le Project" : "The Project"}
    </div>
    </Link>

    <Link href = {"/" + lang + "/author"}>
<div className = {`nav-button ${tab === "The Author" ?  "nav-select" : ""}`} >
    {lang == "fr" ? "A Propos de L'auter" : "The Author"}
</div>
</Link>

<Link href = {"/" + lang + "/context"}>
<div className = {`nav-button ${tab === "Historical Context" ?  "nav-select" : ""}`}>
    {lang == "fr" ? "Contexte Historique" :"Historical Context"}
</div>
</Link>
<Link href ={"/" + lang + "/contributors"}>
<div className = {`nav-button ${tab === "Contributors" ?  "nav-select" : ""}`} >
    {lang == "fr" ? "Contributeurs" : "Contributors"}
</div>
</Link>
</div>
  )
}

export default Nav2