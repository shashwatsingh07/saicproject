import React,{useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Textslide() {

    const notice = [
        {
            id:'1',
            width:'25px',
            height:'20px',
            url:"https://i.ibb.co/grGHTP7/IMG-20240320-WA0016.jpg",
        },
        {
            id:'2',
            width:'25px',
            height:'20px',
            url:"https://i.ibb.co/8D7ns4Z/IMG-20240320-WA0015.jpg",
        },
        {
            id:'3',
            width:'25px',
            height:'20px',
            url:"https://i.ibb.co/3THfjDx/IMG-20240320-WA0014.jpg",
        },
        {
            id:'4',
            width:'25px',
            height:'20px',
            url:"https://i.ibb.co/n8LqrdZ/IMG-20240320-WA0013.jpg",
        },
    ]

  return (
    <div style={{paddingTop:'60px'}}>
      <Carousel autoPlay infiniteLoop interval={1700} showThumbs={false} stopOnHover width={500} >
            {
                notice.map((image)=> <img src={image.url} />)
            }
        </Carousel>
    </div>
  )
}
