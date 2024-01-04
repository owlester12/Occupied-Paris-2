import React from 'react'

interface Data {

    "type": string;
    "EN"?: string | string[],
    "FR"?: string | string[],
    "url"?: string;
    "newline"?: boolean;
    "italics"?: boolean;
    "image"?: string;
    "images"?: string[];

  }

interface TextProps{
    match: Data[][] | undefined;
    between: number
    lang: string
}

const Text:React.FC<TextProps> = ({match, between, lang}) => {

    const chooser = lang === "fr" ? "FR" : "EN";

    if(match == undefined){
        return(<></>);
    }




    return (<div className = "" >
    {
        match.map((value)=>
        ( <div className = {`py-${between}`}> 
           { value.map((val) =>
            {
                
            

            if(val.type == "title-heading"){
                return(
                    <p className ="font-bold text-4xl">{val[chooser]}</p>
                )
            }
            if(val.type == "heading"){
                return (
                    <p className = " text-2xl"> {val[chooser]} </p>
                )
            }
            if(val.type == "url"){
                return (
                    <a className = "text-blue-500 underline" href={val["url"]}>{val[chooser]}</a>
                )
            }
            if(val.type == "italic-text"){
                return (
                    <i>{val[chooser]}</i>
                )
            }
            if(val.type == "special-text"){
                return (
                    <p className='mx-[8%]'>{val[chooser]}</p>
                )
            }
            if(val.type == "image" ){
                return (
                    <div className = "relative max-w-[120%] max-h-[70%] my-10 ">
                        <img src = {val["image"]} className = "rounded-3xl" />
                    </div>
                )
            }
            if(val.type == "images"){
                return(
                    <div className = "relative max-w-[120% my-10 flex">
                        {
                            val["images"]?.map((v) => (
                                <img src = {v} style = {{"objectFit" : "contain"}} />
                            ))
                        }
                        </div>
                )

            }
            if(val.type == "bullet"){
                return(
                    <div>
                        {
                            (val[chooser] as string[])?.map((v) => (
                                <p className = "h py-1 ml-[6%]">{v}</p>
                            ))
                        }
                        </div>
                )

            }
            

            return(

                <span>{val[chooser]}</span>

            ) })
        
        }</div>))
        }

  </div>
  )
}

export default Text