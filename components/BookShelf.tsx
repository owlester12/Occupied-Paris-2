import React from 'react'
import Book from './Book'
import Image from 'next/image'

//Better shelf? https://codepen.io/peterwestendorp/pen/nLGVXP
//Book opening: https://codepen.io/Vlavis/pen/YGbjBv
//Page turn: https://codepen.io/Nafi/pen/bdVrrp
//With tailwind: https://codepen.io/devdojo/pen/qBrEQqM

const BookShelf = () => {
  return (
  

  
  <div className = "bg-gray-50 z-0" >
{/*}
    <div className = "flex pt-10 h-[350px] lg:h-[450px] gap-10 p-10 bg-white  ">
       
       <div className = "flex-1 relative hover:scale-105 transition duration-200 ease-out rounded-xl button-2 ">
        <div className = "inline-block h-full w-full hang">
            <Image fill alt = "Image" src = "/book_images/project_r.jpg"  className = 'object-contain rounded-xl p-3'/>
        </div>
        <p className = "text-base relative text-center ">The Project</p>
        </div>

        <div className = "flex-1 relative hover:scale-105 transition duration-200 ease-out rounded-xl button-2 ">
        <div className = "inline-block h-full w-full hang ">
            <Image fill alt = "Image" src = "/book_images/map_r.jpg"  className = 'object-contain rounded-xl p-3 '/>
        </div>
        <p className = "text-base relative text-center ">Interactive Map</p>
        </div>

        <div className = "flex-1 relative hover:scale-105 transition duration-200 ease-out rounded-xl button-2 ">
        <div className = "inline-block h-full w-full hang ">
            <Image fill alt = "Image" src = "/book_images/atlas_r.jpg"  className = 'object-contain rounded-xl p-3 '/>
        </div>
        <p className = "text-base relative text-center ">Atlas Of Maps</p>
        </div>


  </div>*/}

    <div className = "thewall my-1">




    <div className= "">
        <div className = "lg:flex pt-32 pl-24  items-end ">
        
        <div className = "flex items-end flex-1">
        <Book img = "annette-muller-cover.jpg" size = {200} line1 = "Famille Muller" line2 = "3, rue de l’Avenir" line3 = "Paris 20ème" line4 = "Métro : Télégraphe" name = "muller"/>
        <Book img = "arlette-reiman-cover.jpg"size = {200} line1 = "Famille Reiman" line2 = "114, rue du Temple" line3 = "Paris 3ème" line4 = "Métro : Temple" name = "reiman"/>
        </div>

        <div className = "lg:hidden shelf ml-[-12px] mb-[40px] mr-[12px]  top-[-12px] "/>



        
        <div className = "flex items-end flex-1"> 
        <Book img = "francine-christophe-cover.jpg" size = {200} line1 = "Famille Christophe" line2 = "106, rue Cardinatet" line3 = "Paris 17ème" line4 ="Métro :  Malesherbes" name = "christophe"/>
        <Book img = "helene-berr-cover.jpg" size = {200} line1 = "Famille Bernheim" name = "bernheim"/>
        </div>
        </div>
        <div className = "shelf top-[-12px] mx-12  "/>

    </div>
    <div className= "">
        <div className = "lg:flex pl-24 pr-16 pt-32  items-end ">
        <div className = "flex items-end flex-1">
        <Book img = "francoise-bernheim-cover.jpg" size = {200} line1 = "Famille Berr" name= "berr"/>
        <Book img = "louise-jacobson-cover.jpg" size = {200} line1 = "Famille Jacobson" name = "jacobson" />
        </div>

        <div className = "lg:hidden shelf ml-[-12px] mb-[40px] mr-[12px]  top-[-12px]  "/>



        <div className = "flex items-end flex-1">
        <Book img = "marcel-cohen-cover.jpg" size = {200} line1 = "Famille Cohen" name = "cohen"/>
        <Book img = "rachel-psankiewicz-cover.jpg" size = {200} line1 = "Famille  Psankiewicz" line2 = "26, rue Duris" line3 = "Paris 20ème" line4 = "Métro : Père-Lachaise" name = "psankiewicz"/>
        </div>
        </div>
        <div className = "shelf top-[-12px] mx-12  "/>

    </div>
    <div className= "">
        <div className = "flex justify-between pl-36 pr-16 pt-32  items-end">
        <Book img = "sarah-montard-cover.jpg" size = {200} line1 = "Famille Lichtzstejn" line2 =  "306, rue des Pyrénées" line3 = "Paris 20ème" line4 = "Métro : Jourdain" name = "lichtzstejn"/>
        </div>
        <div className = "shelf top-[-12px] w-80 mx-12  "/>

    </div>

    {/*

    <div className= "hidden sm:block lg:hidden">
        <div className = "flex justify-between pl-36 pr-16 pt-32  items-end">
        <Book img = "annette-muller-cover.jpg" size = {150}/>
        <Book img = "arlette-reiman-cover.jpg" size = {150}/>
        <Book img = "francine-christophe-cover.jpg" size = {150}/>

        </div>
        <div className = "shelf top-[-12px]  "/>

    </div>
    <div className= "hidden sm:block lg:hidden">
        <div className = "flex justify-between pl-36 pr-16 pt-32  items-end">
        <Book img = "helene-berr-cover.jpg" size = {150}/>
        <Book img = "francoise-bernheim-cover.jpg" size = {150}/>
        <Book img = "louise-jacobson-cover.jpg" size = {150}/>
        </div>
        <div className = "shelf top-[-12px]  "/>

    </div>
    <div className= "hidden sm:block lg:hidden">
        <div className = "flex justify-between pl-36 pr-16 pt-32  items-end">
        <Book img = "marcel-cohen-cover.jpg" size = {150}/>
        <Book img = "rachel-psankiewicz-cover.jpg" size = {150}/>
        <Book img = "sarah-montard-cover.jpg" size = {150}/>
        </div>
        <div className = "shelf top-[-12px]  "/>

    </div>







    <div className= "sm:hidden">
        <div className = "flex justify-between pl-36 pr-16 pt-32  items-end">
        <Book img = "Annette_Henri_1945.jpg" size = {120}/>
        <Book img = "Annette_Henri_1945.jpg" size = {120}/>

        </div>
        <div className = "shelf top-[-15px]  "/>

    </div>

    <div className= "sm:hidden">
        <div className = "flex justify-between pl-36 pr-16 pt-32  items-end">
        <Book img = "Annette_Henri_1945.jpg" size = {120}/>
        <Book img = "Annette_Henri_1945.jpg" size = {120}/>

        </div>
        <div className = "shelf top-[-15px]  "/>

  </div> */}


    </div>
    </div>

  )
}

export default BookShelf