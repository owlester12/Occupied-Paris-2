import React from 'react'

import data from '@/public/english/contributors.json'
import Text from '@/components/Text'
import Nav2 from '@/components/Nav2'
import { pageProps, DataItem } from '@/app/interfaces';
import Navbar from '@/components/Navbar';


const page:React.FC<pageProps> = ({params}) => {
    const contributors : DataItem[][] = data
    return(
        <div>
        <Navbar />

        <div className = "sticky top-0 z-10">
        <Nav2 tab = "Contributors" />
        </div>
        <div className = "lg:w-[60%] lg:left-[20%] sm:w-[70%] sm:left-[15%] w-[90%] left-[5%] relative pt-10">

        <Text match = {contributors} between = {3} lang = {params.lang}/>
        </div>
        </div>
        
    )
}

export default page