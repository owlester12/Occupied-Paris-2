import data from '@/public/english/about.json'
import Text from '@/components/Text';
import Nav2 from '@/components/Nav2';
import { pageProps, Data } from '@/app/interfaces';
import Navbar from '@/components/Navbar';

  

import React from 'react'

const page:React.FC<pageProps> = ({params}) => {
    const about : Data = data
    const match = about["muller"];
    return(
        <div>
        <Navbar />

        <div className = "sticky top-0 z-10">
        <Nav2 tab = "The Project" />
        </div>
        <div className = "lg:w-[60%] lg:left-[20%] sm:w-[70%] sm:left-[15%] w-[90%] left-[5%] relative pt-10">
        <Text match = {match} between = {5} lang = {params.lang}/>
        </div>
        </div>
    )
  
}

export default page