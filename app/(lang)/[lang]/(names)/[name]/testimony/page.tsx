'use client'
import NavInner from "@/components/NavInner";
import Text from "@/components/Text";
import data from '@/public/english/testimony.json'
import { pageProps, TestData } from '@/app/interfaces';
import Navbar from "@/components/Navbar";


const Home:React.FC<pageProps> = ({params}) => {
  if (!(params.name == "muller" || params.name == "reiman" || params.name == "psankiewicz" || params.name == "christophe")){
    return(
      <div>
        <Navbar/>
      <div className = "relative text-center top-[100px] font-bold text-3xl">
      Content Unavailable 
      </div>
      </div>
    )
  }
  const test: TestData = data;
    
  return (
    <div>
      <Navbar/>
      <div className = "sticky top-0 z-10">
        <NavInner name = {params.name} tab = "testimony"/>
        </div>
        <div className = "lg:w-[60%] lg:left-[20%] sm:w-[70%] sm:left-[15%] w-[90%] left-[5%] relative pt-10 mb-[50px]">

        <Text match = {test[params.name]["data"]} lang = {params.lang} between = {2} />
        </div>
  <object data={test[params.name]["pdf"]} type="application/pdf"   className = "w-[80%] left-[10%] relative pb-20 h-screen">
</object>





</div>





  )
}

export default Home;