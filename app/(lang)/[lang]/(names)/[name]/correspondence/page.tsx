import React from 'react'
import NavInner from '@/components/NavInner';
import data from '@/public/both/correspondence.json'
import Image from 'next/image';
import './correspondence.css'
import { The_Girl_Next_Door } from 'next/font/google'
import { Correspondence, pageProps } from '@/app/interfaces';
import Navbar from '@/components/Navbar';

const c  = The_Girl_Next_Door ({
    style: ['normal'],
    weight: '400',
    subsets: ['latin']
})




const Home:React.FC<pageProps> = ({params}) => {
  if (!(params.name == "muller" )){
    return(
      <div>
        <Navbar/>
      <div className = "relative text-center top-[100px] font-bold text-3xl">
        Content Unavailable 
      </div>
      </div>
    )
  }
    const dat: Correspondence = data
    const match = dat["muller"].slice(1);
  return (
    <div className = "">
      <Navbar/>
         <div className = "sticky top-0 z-10">
        <NavInner name = {params.name} tab = "correspondence" />
        </div>
        <p className = "p-10 text-center text-4xl font-bold">
            Correspondence 
        </p>
        <div>

        {
                match.map((value) => (
                    <div className = "mt-[10vh] p-10 relative sm:h-[60vh] sm:w-[40vw] w-[80vw] left-[10%] corr sm:items-start ">
                        {value['image-back'] && 
                        <div className  = "h-[50vh] w-full relative sm:absolute sm:h-[60vh] my-[5vh]" > 
                          <Image src = {value['image-front']} fill alt = "image"  objectFit='contain' className = "a front z-5 "/>
                          </div>
                        }
                        {value["image-back"] &&
                        <div className  = "h-[50vh] w-full relative sm:absolute sm:h-[60vh] my-[5vh]" > 
                         <Image src = {value['image-back']} fill alt = "image"  objectFit='contain' className = "a  back z-0 "/>
                         </div>

                        }
                        {!value['image-back'] &&
                        <div className  = "h-[50vh] w-full relative sm:absolute sm:h-[60vh] my-[5vh]" >
                        <Image src = {value['image-front']} fill alt = "image"  objectFit='contain' className = "a  z-5 "/>
                        </div>


                        }
                       <div className = {`te b my-[5vh] px-12 py-6 rounded-xl w-full ${c.className}`}>
                        <p className='text-center pb-3 text-sm'> {params.lang === "fr" ? value.date_FR : value.date_EN}</p>
                        <p className = "text-xs"> {params.lang === "fr" ? value.text_FR : value.text_EN}</p>
                        </div>
                        { value.address_sender &&
                        <div className = {`flex my-[5vh] gap-10 text-base addrs b  px-12 py-6 rounded-xl w-full ${c.className}`}>
                          <p>{value.address_sender}</p>
                          <p>{value.address_recipient}</p>
                          </div>
                      }
                     </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home;