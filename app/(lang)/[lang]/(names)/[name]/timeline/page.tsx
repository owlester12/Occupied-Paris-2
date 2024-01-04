'use client';
import React, { useRef, useState, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Image from 'next/image'
import { useIntersectionObserver } from '@react-hooks-library/core';
import Time from '@/components/Time';
import data from '@/public/english/timeline.json'
import NavInner from '@/components/NavInner';
import './timeline.css'
import BigTime from '@/components/BigTime';
import { pageProps, TimeData } from '@/app/interfaces';
import Navbar from '@/components/Navbar';



const Home:React.FC<pageProps>  = ({params}) => {
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
 
    const para = useRef<IParallax>(null!)
    const ref:any = useRef();
    const title:any = useRef();

    const {entry} = useIntersectionObserver(ref);

    const [white, setWhite] = useState(false);

      const [time, setTime] = useState("1930");
      const [year, setYear] = useState(1920);
      const line = (data as TimeData)[params.name];
      const [rand, setRand] = useState<number[]>([])
      const [w1939, setw1939] = useState(true);

      const years = line.map(val => val.Year);

      const fqv = (arr: number[], percentile: number): number => {

      
        // Calculate the index corresponding to the percentile
        const index = Math.round((percentile / 100) * (arr.length - 1));
      
        // Return the element at the calculated index
        return arr[index];
      };

      const findFirst = (year:number): number =>{
        for(let i = 0; i < years.length; i++){
          if(years[i] == year){
            if(year >= 1944){
              return i + 3.8;
            } 
            if(year >= 1942){
              return i + 2.8;
            }
            if(year >= 1939){
              return i + 1.8;
            }
            return i + 0.8;
          }
        }
        return 0;
      }
      
      const firstq: number[] = [years[0], fqv(years, 20), fqv(years, 40), fqv(years, 60), fqv(years, 80), years[years.length-1]]
      const quantiles: number[] = firstq.map((value, index) => {
        if(index == 0 || (index > 0 && firstq[index-1] != firstq[index])){
          return firstq[index]
        }
      }).filter((value) => typeof value === "number") as number[];


      const getTime = (ind: number) => {
        if(year - quantiles[ind] >= 0 ){
          if(ind + 1 >= quantiles.length){
            return true;
          }
          if(ind + 1 < quantiles.length && year - quantiles[ind+1] < 0){
            return true;
          }
        }
        return false;
      }



      const convertTime = () => {

        let timeArray = time.split("/");
        if(timeArray[0] === "1") timeArray[0] =  "January";
        if(timeArray[0] === "2") timeArray[0] =  "February";
        if(timeArray[0] === "3") timeArray[0] =  "March";
        if(timeArray[0] === "4") timeArray[0] =  "April";
        if(timeArray[0] === "5") timeArray[0] =  "May";
        if(timeArray[0] === "6") timeArray[0] =  "June";
        if(timeArray[0] === "7") timeArray[0] =  "July";
        if(timeArray[0] === "8") timeArray[0] =  "August";
        if(timeArray[0] === "9") timeArray[0] =  "September";
        if(timeArray[0] === "10") timeArray[0] =  "October";
        if(timeArray[0] === "11") timeArray[0] =  "November";
        if(timeArray[0] === "12") timeArray[0] =  "December";

        return timeArray;

      }

      useEffect(() => {
        // Function to generate random numbers
        const generateRandomNumbers = () => {
          const arr = [];
          for (let i = 0; i < line.length; i++) {
            arr.push(Math.random()); 
          }
          setRand(arr);
        };
    
        generateRandomNumbers(); // Call the function to generate numbers when the component mounts
      }, []);




    //https://www.youtube.com/watch?v=UgIwjLg4ONk&t=212s

  return (
    <div >

     {/*} <div className = "sticky top-0 z-10">
        <NavInner name = {params.name} tab = "timeline" />
  </div>*/}
        <Parallax pages={line.length +4} ref = {para}  className = "time">

          <ParallaxLayer offset = {0} className='z-[100]' sticky = {{ "start": 0.0, "end": 0.1}} >
          <Navbar  />
          <NavInner name = {params.name} tab = "timeline" />
          </ParallaxLayer>






          <ParallaxLayer  sticky = {{"start": 0.0, "end": line.length+4 }} className={` z-[10] ${white ? " text-white mix-blend-difference" : ""}`}>
          <div className = {`absolute top-[15%] left-[35%] ${white ? " text-white mix-blend-difference" : ""}`}>
        <div className = {` font-['Chomsky'] text-6xl ${white ? " text-white mix-blend-difference" : ""}`} >
          Occupied Paris

        </div>
        <div className = {` font-serif text-2xl ${white ? " text-white mix-blend-difference" : ""}`} >
        <p   className = {` inline  ` } >{convertTime()[0]} </p>
        { convertTime()[1] && <p   className = {` inline  ` } >   &nbsp; {convertTime()[1]},  &nbsp; </p>}
        <p   className = {` inline ` } >{convertTime()[2]} </p>



        </div>
        </div>
          </ParallaxLayer>
          <ParallaxLayer  className='z-[95]' sticky = {{ "start": 0.0, "end": line.length+4 }} >
            <NavInner name = {params.name} tab = "timeline" />
</ParallaxLayer>




          {line.map((value, index) => {

            let num = index;
            if((value.Year == 1939 && parseInt(value.Month as string) >= 9) || value.Year > 1939){
              num = num + 1;
            }
            if(value.Year >= 1942){
              num = num + 1;
            }
            if((value.Year >= 1944 && parseInt(value.Month as string) >= 8) || value.Year > 1944){
              num = num + 1;
            }




          const returner =  <Time 
          year = {value.Year}
          month = {value.Month}
          day = {value.Day}
          time = {value.Time}
          endYear={value['End Year']}
          endDay={value['End Day']}
          endMonth={value['End Month']}
          endTime= {value['End Time']}
          headline = {params.lang == "fr" && "Headline_FR" in value ? value.Headline_FR : value.Headline_EN}
          text = {params.lang == "fr" && "Headline_FR" in value ? value.Text_FR : value.Text_EN}
          img = {value.Media}
          imgCredit = {value['Media Credit']}
          imgCaption= {value['Media Caption']}
          setDate={setTime}
          num = {num }
          setYear = {setYear}
          rand = {rand[index]}
          />;

          console.log(value);

            

            if((value.Year < 1939 || (value.Year == 1939 &&  (parseInt(line[index].Month as string) < 9 ))) &&
            (index + 1 < line.length && ( line[index+1].Year > 1939 || (line[index+1].Year == 1939 && (parseInt(line[index+1].Month as string) >= 9 ))))){
              
              //add the new display
              //setYear(1939);
              //setTime("9/1/1939");
              

              return(

                <div>

        
                {returner}
                <BigTime 
                year={1939}
                month={9}
                day = {1}
                text = "World War 2 begins"
                img = "startwar"
                setDate = {setTime}
                setYear = {setYear}
                num = {num + 0.9 }
                setWhite = {setWhite}
                theref = {title}
              />
                </div>

              


              )
            }

            else if(value.Year < 1942 && line[index+1].Year >= 1942){
              //add the new display
             // setYear(1942);
              //setTime("//1942");

            
              return(
                <div>

        
                {returner}
                <BigTime 
                year={1942}
                month={""}
                day = {""}
                text = "Nazis start deporting Parisian Jews to concentration camps"
                img = "midwar"
                setDate = {setTime}
                setYear = {setYear}
                num = {num + 0.9 }
                setWhite = {setWhite}
                theref = {title}
              />
                </div>
              )
            }

           else  if((value.Year < 1944 || (value.Year == 1944 &&  (parseInt(line[index].Month as string) < 8 ))) &&
            (index + 1 < line.length && (line[index+1].Year > 1944 || (line[index+1].Year == 1944 && (parseInt(line[index+1].Month as string) >= 8 ))))){
             
           
           //add the new display - make this specifically in August
              //setYear(1944);
              //setTime("8//1944");

                            return(
                              <div>

        
                              {returner}
                              <BigTime 
                              year={1944}
                              month={8}
                              day = {""}
                              text = "Paris is liberated by allied forces"
                              img = "endwar"
                              setDate = {setTime}
                              setYear = {setYear}
                              num = {num + 0.9 }
                              setWhite = {setWhite}
                              theref = {title}
                            />
                              </div>
                            )
            }
            else {

            return (
           returner
            )
            }

})

          }

          {/*<Time
          header = "Arrival in France"
          description = "Rachel Frymet Weiser was born on October 16, 1908 in Wojnicz. Manek Schneps was born on February 12, 1910 in Biecz. Both shtetls were located in the Polish province of Galicia, near Krakow. They came from large and very religious families. Manek's owned the village mill which might explain the origin of the name Muller he was surprisingly given on his emigration papers. They emigrated to France to escape the familial religiousness and disapproval of their secular behaviors. Neither of them spoke any French, only Polish and Yiddish. Life in France was extremely difficult. They lived in hotels in the neighborhoods of Belleville and Ménilmontant where Manek took on sewing jobs. "
          date = "1929"
          year = {1929}
          num = {0}
          setDate = {setTime}
          setYear={setYear}
          />
          <Time
          header = "Growing family"
          description = "Henri was born on November 12, 1930. Due to financial hardship, Rachel temporarily moved back to Poland with her infant. Manek stayed in Paris to continue working for a better life for their growing family. During this time, Rachel was pregnant with their second child. Jean was born immediately upon her return on November 11, 1931. "
          date = "November 11 1931"
          year = {1931}
          num = {1}
          setDate = {setTime}
          setYear={setYear}

          />

        <Time
          header = "Annette is born"
          description = "Manek took this picture in 1934. Rachel is holding Annette. Henri is sitting next to her. Jean is held by a family friend from Poland. "
          date = "March 15 1933"
          year = {1933}
          num = {2}
          setDate = {setTime}
          setYear={setYear}

          />
  */}


  

  
           

        </Parallax>
        <div className = {`  absolute top-[40%] right-[0%] sm:right-[2.5%] flex flex-col z-[10]  ${white ? " mix-blend-difference" : ""}`}  ref = {title}>
          {
            quantiles.map((value, index) => (
              <div className = {`  ${white ? " text-white" : ""}  text-black ${getTime(index) && !white ? 'bg-gray-300' : 'bg-transparent'} button-time text-xs p-2 rounded-lg  `} onClick = {() => para.current.scrollTo(findFirst(value) - 0.4)}
              > {value}</div>
              ))
            
          }
          {/*}

                      {/* $

                     
                      



          <p className = {` button text-xs p-2 rounded-lg ${getTime() == 1920 ? 'bg-gray-300' : 'bg-transparent'}`}onClick = {() => para.current.scrollTo(0)}>1920</p>
          <p className = {` button text-xs p-2 rounded-lg ${getTime() == 1930 ? 'bg-gray-300' : 'bg-transparent'}`}onClick = {() => para.current.scrollTo(1)}>1930</p>
          <p className = {` button text-xs p-2  rounded-lg ${getTime() == 1940 ? 'bg-gray-300' : 'bg-transparent'}`}onClick = {() => para.current.scrollTo(2)}>1940</p>
        */}
        </div>
       {/*} <div className = {`absolute top-[15%] left-[35%] ${white ? " text-white mix-blend-difference" : ""}`}>
        <div className = {` font-['Chomsky'] text-6xl ${white ? " text-white mix-blend-difference" : ""}`} >
          Occupied Paris

        </div>
        <div className = {` font-serif text-2xl ${white ? " text-white mix-blend-difference" : ""}`} >
        <p   className = {` inline  ` } >{convertTime()[0]} </p>
        { convertTime()[1] && <p   className = {` inline  ` } >   &nbsp; {convertTime()[1]},  &nbsp; </p>}
        <p   className = {` inline ` } >{convertTime()[2]} </p>



        </div>
      </div>*/}
    </div>
  )
}

export default Home