import React from 'react'
import blog from '@/public/english/blog.json'
import Image from 'next/image';
import NavInner from '@/components/NavInner';
import Text from '@/components/Text';
import { Data, pageProps } from '@/app/interfaces';
import Navbar from '@/components/Navbar';




const Home:React.FC<pageProps>  = ({params}) => {
  if (!(params.name == "muller" || params.name == "psankiewicz" )){
    return(
      <div>
        <Navbar/>
      <div className = "relative text-center top-[100px] font-bold text-3xl">
        Content Unavailable 
      </div>
      </div>
    )
  }
    const data: Data = blog;
    const match = data[params.name];


  return (
    <div>
      <Navbar/>
        <div className = "sticky top-0 z-10">
        <NavInner name = {params.name} tab = "blog" />
        </div>
        <div className = "lg:w-[60%] lg:left-[20%] sm:w-[70%] sm:left-[15%] w-[90%] left-[5%] relative pt-10">

        <Text match = {match} between = {3} lang = {params.lang}/>
        </div>
        
        
        
        {/*}
    <div className = "lg:w-[60%] lg:left-[20%] sm:w-[70%] sm:left-[15%] w-[90%] left-[5%] relative pt-10">
        <div className = "md:text-4xl text-2xl font-bold py-10 ">Mélanie's Blog: Henri Muller</div>

        {match.map((value, index)=>{

            if(value.substring(0,1) == "/"){
                return(
                    <div className = "relative max-w-[120%] max-h-[70%] my-10 ">
                        <Image src = {value} width = {2000} height = {2000} alt = "Image" className = "relative rounded-3xl"  />
                        </div>
                )

                }
            


            return(<p className = "py-5">{value}</p>)

        }
        )
        }



        
      </div>*/}
    </div>
  )
}

export default Home;