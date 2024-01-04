'use client'
import React from 'react'
import Image from 'next/image'
import NavInner from '@/components/NavInner'
import {useState} from 'react';
import Text from '@/components/Text'
import resource from '@/public/english/resources.json'
import homepage from '@/public/both/homepage.json'
import data from '@/public/both/photos.json'
import correspond from '@/public/both/correspondence.json'
import { pageProps, Correspondence, PhotoData, Data, Home, Archives } from '@/app/interfaces';
import Navbar from '@/components/Navbar';
import archive from '@/public/both/archives.json'
import Link from 'next/link'



const page:React.FC<pageProps>  = ({params}) => {
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




  const resources: Data = resource;
  const homep: Home = homepage;
  const real_data: PhotoData = data;
  const correspondence: Correspondence = correspond;
  const arch: Archives = archive;

  const right = real_data[params.name].slice(0,real_data[params.name].length/2);
  const left = real_data[params.name].slice(real_data[params.name].length/2 + 1, real_data[params.name].length);

  const [threed, setThreed] = useState(true);
  const width: number = 100/Math.ceil(Math.sqrt(real_data[params.name].length/2)/Math.sqrt(2));
  const height: number = 100/((real_data[params.name].length/2)/Math.ceil(100/width));
  const [video, setVideo] = useState(0);

  const nextVideo = () => {
    console.log((homep[params.name].video?.length ?? 0))
    if("video" in homep[params.name] && video+1 >= (homep[params.name].video?.length ?? 0) ){
      setVideo(0);
    } else {
      setVideo(video + 1);
    }
    }

    const prevVideo = () => {
      console.log((homep[params.name].video?.length ?? 0))
      if("video" in homep[params.name] && video == 0 ){
        setVideo((homep[params.name].video?.length  ?? 1) - 1);
      } else {
        setVideo(video - 1);
      }
      }





  return (
    <div className = "out1">
      <div className = "out2">
      <Navbar />

        <div className = "hidden sm:block sticky top-0 z-[1000]">
            <NavInner name = {params.name} tab = "" threed = {threed} setThreeD={setThreed} />
        </div>
        <div className = " sm:hidden sticky top-0 z-[1000]">
            <NavInner name = {params.name} tab = ""  />
        </div>

        <div className = "text-3xl min-[500px]:text-6xl mx-[5%] mt-[3.5%] mb-[3.5%] font-bold font-serif ">
          {params.lang == "fr" ? "Famille " + homep[params.name]["name"] : homep[params.name]["name"] + " Family"}

        </div>



        <div className = "comb flex w-screen sm:h-[140vh] flex-col sm:flex-row ">
          <div className = {` h-[75vh] w-[70vw]  sm:h-[140vh] sm:w-full sm:bg-white  top-[1%] sm:top-[1.5%] md:top-[2%] lg:top-[2.25%] xl:top-[2.5%] text-center wall-1-all sm:flex-1 ${threed ? "wall-1" : "wall-1-2d"}`}>{/* top-[8px] md:top-[15px] lg:top-[17px] xl:top-[20px] md:left-[12px] lg:left-[25px] xl:left-[32px] 2xl:left-[40px] ">*/}

            <div  className = "inline-block frame   plaque p-0 absolute w-[80%]   my-[50px] left-[10%] ">{/*"inline-block frame plaque left-10 top-10 w-[200px] h-[300px]"*/}

              <Image src = {homep[params.name]["bio"]["image"]} width = {1000} height = {1000}    alt = "Image"  objectFit='contain'  className ="relative inFrame"   />{/* className = "inFrame"*/}
            </div>
            <p className='hidden sm:block text-[60px] font-bold font-serif pb-5 px-10 bottom-[3%] absolute ' id = "Map">Map </p>

          </div>
          <div className = {`h-[140vh] w-full sm:bg-gray-200 right-[2%] md:right-[3%] xl:right-[4%] wall-2-all ${threed ? "wall-2" : "wall-2-2d"}`}>{/*} md:right-[25px] lg:right-[35px] xl:right-[45px] 2xl:right-[55px]">*/}
           <div   className = "flex-1 plaque rounded-lg mx-[70px] md:mx-[90px] lg:mx-[110px] xl:mx-[130px] my-[50px] bg-white p-5 text-xs lg:text-sm md:right-[32px] lg:right-[45px] xl:right-[50px]">
              <p className = "py-2 font-bold text-lg md:text-2xl lg:text-4xl">Biography</p>
              {/*{intro.text.map((value) => (
                <p className = "py-2"> {value} </p>
              ))}*/}
              <Text lang = {params.lang} match = {homep[params.name]["bio"]["text"]} between = {2}/>
            </div>
              <p className = "hidden sm:block text-center bottom-[0px] absolute mx-[20%]">Click on the points on the map to follow the Muller family's story within the Parisian landscape.</p>
          </div>
        </div>
       
       { "testimony" in homep[params.name ] && <div className = " sm:w-[60%] w-full bg-black relative sm:absolute z-10  sm:left-[20%] wall-3 sm:rounded-3xl pb-5  ">
          <p className = "text-[60px] font-bold text-white text-center pt-12 pb-5 ">Testimony</p>

          <div className='  text-white first-letter:text-5xl  first-letter:float-left first-letter:font-bold w-[70%] left-[15%] relative text-xs sm:text-sm lg:text-base'>
          <Text lang = {params.lang} match = {homep[params.name]["testimony"].slice(1)} between = {2}/>

            {/*<p>{test && test.text}</p>*/}
          </div>
          <div className='text-center py-5'>
          <Link href = {"/" + params.lang + "/" + params.name + "/testimony"} >
          <span className ="px-5 py-2 text-sm inline-block bg-white text-black rounded-full relative font-bold   cursor-pointer"> Read the Full Testimony</span>
          </Link>
          </div>
        </div>}


       {"map" in   homep[params.name ] && <div className = "new-cont">


          <div className={`mx-auto ${threed ? "tablet_3d" : "tablet_2d"} tablet`}>
            <div className="screen">

              <iframe src= {homep[params.name]["map"]} width="100%" height="100%" ></iframe>
            </div>
          </div>
          <Link href = {"/" + params.lang + "/" + params.name + "/map"} >
           <div className =" px-7 py-3 bg-black text-white rounded-full inline relative left-[45%] font-bold text-lg top-[-20px]"> Fullscreen</div>
        </Link>
        </div>}



       {"blog" in   homep[params.name] &&  <div className = " mt-[5vh] plaque  sm:mt-[125vh] sm:w-[60%] z-[-1] sm:left-[20%] relative rounded-3xl p-2 bg-white blog px-10">

          <p className=' text-[32px] md:text-[48px] sm:text-[40px] lg:text-[60px] font-bold font-serif pb-5 px-10 text-center  pt-10 ' >Blog </p>
          <div className = "text-xs sm:text-base">
          <Text lang = {params.lang} match = {homep[params.name]["blog"]} between = {2}/>
          </div>
            <div className= "text-center">
            <Link href = {"/" + params.lang + "/" + params.name + "/blog"} >
            <div className ="px-7 py-3 inline-block bg-black text-white rounded-full relative font-bold text-lg top-[-20px] cursor-pointer"> Read the Blog</div>
            </Link>
            </div>


        </div>}

        {params.name in arch && <div className = " mt-[5vh] plaque  sm:mt-[125vh] sm:w-[60%] z-[-1] sm:left-[20%] relative rounded-3xl bg-white blog  h-[80vh] p-2">
        <p className=' text-[32px] md:text-[48px] sm:text-[40px] lg:text-[60px] font-bold font-serif px-3  absolute  pt-3 z-[5] bg-white rounded-3xl bg-opacity-70' >Archives </p>

        <div className = "m-[2%] w-full h-full flex flex-wrap relative">
        <div className = "w-[50%] h-[50%] relative"> 
        <Image src = {arch[params.name][0]['imageFront']} fill alt = "image" objectFit='cover' />
        </div>
        <div className = "w-[50%] h-[50%] relative"> 
        <Image src = {arch[params.name][1]['imageFront']} fill alt = "image" objectFit='cover' />
        </div>
        <div className = "w-[50%] h-[50%] relative"> 
        <Image src = {arch[params.name][2]['imageFront']} fill alt = "image" objectFit='cover' />
       </div>
       <div className = "w-[50%] h-[50%] relative"> 
        <Image src = {arch[params.name][3]['imageFront']} fill alt = "image" objectFit='cover' />
        </div>
          </div>
          <div className='text-center'>
          <Link href = {"/" + params.lang + "/" + params.name + "/archives"} >
          <span className ="px-7 py-3 inline-block bg-black text-white rounded-full relative font-bold text-lg  cursor-pointer"> Read the Archives</span>
          </Link>
          </div>


          </div>}


        <div className = "comb-2 flex w-screen h-[100vh] ">
          <div className = {`wall1 bg-white ${threed ? "wall1-3d" : "wall1-2d"}`}>
          <p className=' text-[32px] md:text-[40px] sm:text-[35px] lg:text-[48px] font-bold font-serif px-3  absolute right-[5%]  pt-3 z-[5] bg-white rounded-3xl bg-opacity-70' >Wall of </p>
          <Link href = {"/" + params.lang + "/" + params.name + "/photos"} >
          <span className ="px-5 py-2 text-sm inline-block bg-white text-black rounded-full  font-bold absolute bottom-[10px] z-[5] right-[10%]  cursor-pointer"> Photo Gallery</span>
          </Link>
            <div className = "ml-[10%] w-full flex flex-wrap relative">
             {
              left.map((value) => (
                <div className = {"relative"} style = {{"width": width.toString() + "%", "height": height.toString() + "%"}}>
                {/*{` w-[${100/Math.sqrt(real_data[params.name].length/2)}%] h-[${140/Math.sqrt(real_data[params.name].length/2)}%]  relative`}>*/}
                 {value.image && <Image src = {value.image} fill alt = "image" objectFit='cover' />}
                 {value["imageFront"] && <Image src = {value["imageFront"]} fill alt = "image" objectFit='cover' />}

                </div>
                ))
            }
          </div>
   
        </div>
        <div className = {`wall2 sm:bg-gray-200 ${threed ? "wall2-3d" : "wall2-2d"}`}>
        <p className=' text-[32px] md:text-[40px] sm:text-[35px] lg:text-[48px] font-bold font-serif px-3  absolute left-[5%]  pt-3 z-[5] bg-white rounded-3xl bg-opacity-70' >Rememberance </p>
          <div className = "flex flex-wrap relative w-full mr-[10%]">
            {
              right.map((value) => (
                <div className = "relative" style = {{"width": width.toString() + "%", "height": height.toString() + "%"}}>
                 {value.image && <Image src = {value.image} fill alt = "image" objectFit='cover' />}
                 {value["imageFront"] && <Image src = {value["imageFront"]} fill alt = "image" objectFit='cover' />}

                </div>
                ))
            }
          </div>
  
        </div>
      </div>



      { params.name in correspondence && 
      <div className = " sm:w-[60%] mt-[20vh] time sm:absolute z-10  sm:left-[20%] wall-3 sm:mt-[80vh] rounded-3xl ">
        <p className=' text-[32px] md:text-[48px] sm:text-[40px] lg:text-[60px] font-bold font-serif pb-5 px-10 text-center   pt-10 ' >Correspondence </p>
        <div className = "mx-auto">

          <Image src = {correspondence[params.name][0]["image-front"]} alt = "Image" width = {400} height = {400} style={{"margin": "auto"}} />
        </div>

        <p className = "p-10 lg:text-base text-sm">
        {params.lang == "fr" && "text_FR" in correspondence[params.name][0] ? correspondence[params.name][0]["text_FR"] : correspondence[params.name][0]["text_EN"]} </p>
        <div className = "text-center mb-5">
        <Link href = {"/" + params.lang + "/" + params.name + "/correspondence"} >
        <div className ="px-7 py-3 bg-black text-white rounded-full font-bold text-base inline-block cursor-pointer"> See Correspondences</div>
        </Link>
        </div>
      </div>
}



{"video" in homep[params.name] &&
      <div className = "bg-[#222] min-h-[95vh] cont-2 pb-[50px]"> {/* bg-[#222]*/}
        <p className="text-[60px] font-bold font-serif pt-12 text-white text-center" id = "Video">Video</p>
        <div className = "py-5 rounded-2xl text-white relative sm:w-[60%] sm:left-[20%] w-[80%] left-[10%] text-center "> 
        <Text match = {homep[params.name].video?.[video].text} lang = {params.lang} between={2}/> 
        </div>
        { homep[params.name].video?.[1]?.video &&
       ( 
       <div className = "flex justify-between sm:px-32 px-10 mt-[3%] mb-[2%]">
        <div className = "text-black text-sm font-bold  bg-white rounded-full px-5 py-3 cursor-pointer" onClick = {prevVideo}> Previous Video </div>
       <div className = "text-black text-sm font-bold  bg-white  rounded-full px-5 py-3 cursor-pointer" onClick = {nextVideo}>
        Next Video
          </div>

          </div>)

        }
       




        <div id="monitor" className = "mx-[5%]" >
          <div id="monitorscreen">
            <iframe id="kaltura_player" src={homep[params.name].video?.[video].video} width="100%" height="100%"   allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="Kaltura Player" ></iframe>

          </div>
        </div>





      </div>
}


     { "timeline" in   homep[params.name ] && <div className = {`relative z-[-1] timeline ${ "video" in homep[params.name] ? "sm:top-[180vh]": "sm:top-[220vh]"}`} >

        <p className='text-[60px] font-bold font-serif pt-10 px-10 top-[5%]' style = {{"transform": "translateY(80px)"}} id = "Timeline">Timeline </p>
        <div className={`tablet mx-auto ${threed ? "tablet_3d" : "tablet_2d"} `}>
          <div className="screen">

            <iframe  src= {homep[params.name]["timeline"]} width="100%" height="100%" ></iframe>

          </div>
        </div>
        <Link href = {"/" + params.lang + "/" + params.name + "/timeline"} >
           <div className =" px-7 py-3 bg-black text-white rounded-full inline relative left-[45%] font-bold text-lg top-[-20px]"> Fullscreen</div>
        </Link>
      </div>}



      <div className = {`relative  ${ "video" in homep[params.name] ? "sm:top-[210vh]": "sm:top-[250vh]"}  bg-gray-200 p-[20px]`}>
      <p className='text-[60px] font-bold font-serif pb-5 px-10 top-[5%] relative text-gray-800' >Resources </p>
      <div>
        <Text match={resources[params.name]} lang={params.lang} between={3}/>
      </div>


      </div>

  
      



    </div>
  </div>
    


  )
}

export default page