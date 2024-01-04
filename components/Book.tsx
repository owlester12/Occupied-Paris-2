'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


interface BookProps{
    img: string;
    size: number;
    line1: string;
    line2?: string;
    line3?: string;
    line4?: string;
    name: string;
}

const Book: React.FC<BookProps> = ({img, size, line1, line2, line3, line4, name}) => {
    const pathname = usePathname();
    const lang = pathname.split("/")[1];
    return (
    <Link href = {`/${lang}/${name}`} className = "flex-1">
    <div className = "book">
    <div className = "cover z-10">

    <Image src = {"/book_images/" + img}width = {size} height = {size} alt = "Image"  className = "im"/>
    </div>
    <div  className = "absolute bg-gray-200 inline-block top-0 h-full w-full gap-y-3">
        <p className = "font-bold text-center pt-4 text-base">{line1}</p>
        <p className = "text-sm text-center">{line2}</p>
        <p className = "text-sm text-center">{line3}</p>
        <p className = "text-sm text-center"> {line4}</p>

    </div>
</div>
</Link>
  )
}

export default Book