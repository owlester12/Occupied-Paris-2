import React from 'react'
import NavInner from '@/components/NavInner'
import { pageProps } from '@/app/interfaces';
import Navbar from '@/components/Navbar';


const Home:React.FC<pageProps> = ({params}) => {
  if (!(params.name == "muller" || params.name == "reiman" || params.name == "psankiewicz" || params.name == "christophe")){
    return(
      <div>
        <Navbar/>
      <div className = "relative text-center top-[100px] font-bold text-3xl">
        Content Forthcoming 
      </div>
      </div>
    )
  }
  return (<div>
    <Navbar/>
    <div className = "sticky top-0 z-10">
        <NavInner name = {params.name} tab = "map" />
        </div>
    <div className='h-screen overflow-hidden'>

    
    <iframe src="https://pennds.org/melanieperon/neatline/fullscreen/muller-map" width="100%" height="100%" ></iframe>

    </div>
    </div>
  )
}

export default Home;