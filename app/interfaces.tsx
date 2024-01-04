
interface CorrespondenceItem {
    "image-front": string;
    "image-back": string;
    "toggle": string;
    "title": string;
    "heading_FR": string;
    "date_FR": string ;
    "text_FR": string;
    "heading_EN": string;
    "date_EN": string ;
    "text_EN": string;
    "address_sender": string;
    "address_recipient": string;
  }
  
  export interface Correspondence{
    [key:string]: CorrespondenceItem[];
  }
  
  
  
  
  export interface Photo{
    title_EN?: string
      title_FR?: string
      image?: string
      caption_EN: string | number
      caption_FR: string | number
      "imageFront"?:string;
      "imageBack"?:string;
  }
  
  export interface PhotoData{
    [key:string]: Photo[];
  }

export interface DataItem{
    "type": string;
    "EN"?: string | string[],
    "FR"?: string | string[],
    "url"?: string;
    "newline"?: boolean;
    "italics"?: boolean;
    "image"?: string;
    "images"?: string[];

  }


  
export interface Data {
    [key:string]: DataItem[][];
  }
  
  
  
export interface pageProps{
    params: {name:string, lang: string}
  }

 export interface TestData{
    [key:string]: {
      "data": DataItem[][];
      "pdf": string;
    }
   }

export interface TimeData {
    [key: string]: {
      Year: number ;
      Month:  number | string;
      Day:  number | string;
      Time: string;
      "End Year":  number | string;
      "End Month":  number | string;
      "End Day":  number | string;
      "End Time": string;
      "Display Date": string;
      Headline_EN: string;
      Text_EN: string;
      Headline_FR?: string;
      Text_FR?: string;
      Media: string;
      "Media Credit": string;
      "Media Caption": string;
      "Media Thumbnail": string;
      Type: string;
      Group: string;
      Background: string;
    }[];
  }

interface ContextEntry {
    type: string;
    url_EN?: string;
    url_FR?: string;
    image: string;
    heading_EN?: string;
    heading_FR?: string;
    stext_EN?: string;
    "italic-text_EN"?: string;
    etext_EN?: string;
    stext_FR?: string;
    "italic-text_FR"?: string;
    etext_FR?: string;
}

export interface Context {
    title_EN: string;
    title_FR: string;
    text_EN: string;
    text_FR: string;
    data: ContextEntry[];
}

export interface Home{
    [key:string]:{
    "bio":{
    "text": DataItem[][];
    "image": string;
    }
    "testimony": DataItem[][];
    "video"?: {
      "text":  DataItem[][];
      "video": string;
    }[]
    "timeline"?: string;
    "map"?: string;
    "blog"?: DataItem[][];
    "name": string;
    }
  }

export interface Archives{
  [key:string]: {
  "imageFront": string;
  "imageBack": string;
  "title_EN": string;
  "title_FR": string;
  "name": string;
  "caption_EN": string;
  "caption_FR": string;
  }[]
}

export interface ArchivesProp{
  "imageFront": string;
  "imageBack": string;
  "title_EN": string;
  "title_FR": string;
  "name": string;
  "caption_EN": string;
  "caption_FR": string;
  "left": boolean;
  "lang": string;
}
