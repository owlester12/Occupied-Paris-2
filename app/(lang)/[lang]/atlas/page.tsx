'use client';
import {useState} from 'react'
import Navbar from '@/components/Navbar';

const page = () => {

    const [map, setMap] = useState("test-exhibit-1-1")

    
  return (
    <div>
             <Navbar />

        <div className = "flex z-50 py-2 md:px-10 justify-center px-5 bg-white bg-opacity-50 backdrop-blur-sm gap-10 sticky top-0">
            <div className =  {`nav-button ${map === "muller-map" ?  "nav-select" : ""}`}
            onClick= {() => setMap("muller-map")}>
                 Annette Muller </div>
            <div
            className =  {`nav-button ${map === "rachel-jedinak" ?  "nav-select" : ""}`}
            onClick = {() => setMap("rachel-jedinak")}>
                 Rachel Jedinak </div>
            <div className =  {`nav-button ${map === "heleneberr" ?  "nav-select" : ""}`}
            onClick = {() => setMap("heleneberr")}>
                 Hélène Berr </div>
            <div className =  {`nav-button ${map === "marcelcohen" ?  "nav-select" : ""}`}
            onClick = {() => setMap("marcelcohen")}>
                 Marcel Cohen </div>
           {/*} <div className = "cursor-pointer"
            onClick = {() => setMap("francine-christophe")}> 
  Francine Christophe </div>*/}
            <div className =  {`nav-button ${map === "testyler" ?  "nav-select" : ""}`}
            onClick = {() => setMap("testyler")}> Arlette Reiman </div>

        </div>
        <div className='h-screen overflow-hidden'>

    
        <iframe src= {`https://pennds.org/melanieperon/neatline/fullscreen/${map}`} width="100%" height="100%" ></iframe>

        </div>
    </div>
  )
}

export default page