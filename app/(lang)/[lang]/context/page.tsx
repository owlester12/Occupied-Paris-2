import React from 'react'
import data from '@/public/english/context.json'
import Nav2 from '@/components/Nav2'
import { pageProps, Context } from '@/app/interfaces';
import Navbar from '@/components/Navbar';


const page:React.FC<pageProps> = ({params}) => {
    const context: Context = data;


  return (
    <div>
        <Navbar />

        <div className = "sticky top-0 z-10">
        <Nav2 tab = "Historical Context"  />
        </div>
    <div className = "relative w-[70%] left-[15%] my-10">
        <div className = "my-[8vh]">
                    <p className = "font-bold text-4xl my-4">{params.lang === "fr" ? context.title_FR : context.title_EN}</p>
                    <p>{params.lang === "fr" ? context.text_FR : context.text_EN}</p>
        </div>
        
        <div className = "flex flex-wrap gap-3 justify-between">
        {
        context["data"].map((value) => {
            if(params.lang == "en" && value.type == "fr"){
                return(<></>)
            }
            if(params.lang == "fr" && value.type == "en"){
                return(<></>)
            }
            return(
                <a href = {params.lang === "fr" ? value.url_FR : value.url_EN} className = "plaque rounded-2xl p-6 sm:max-w-[48%]"> 
                <img src = {value["image"]} />

                <p className = "my-3 font-bold text-lg">{params.lang === "fr" ? value.heading_FR : value.heading_EN}</p>
                <div>
                    <span>{params.lang === "fr" ? value.stext_FR : value.stext_EN}</span>
                    <i> {params.lang === "fr" ? value["italic-text_FR" ]: value["italic-text_EN"]}</i>
                    <span>{params.lang === "fr" ? value.etext_FR : value.etext_EN}</span>

                </div>



                </a>
            




                );
           
        })
        }
        </div>
        </div>
        </div>
  )
}

export default page