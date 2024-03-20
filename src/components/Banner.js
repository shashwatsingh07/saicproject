import React from 'react';
import { useState } from 'react';
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {



    const images = [
        {
            id:'1',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/X2K0mpM/10-june-2023-wesite.jpg",
        },
        {
            id:'2',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/XjWFCRN/alumnimeet.jpg",
        },
        {
            id:'3',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/TRGHZrB/pic1.jpg",
        },
        {
            id:'4',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/8Y7kP52/footer-bg.jpg",
        },
        {
            id:'5',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/pwsVbmD/pic2.jpg",
        },
        {
            id:'6',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/6XJgPTJ/pic3.jpg",
        },
        {
            id:'7',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/qdR9bZt/pic4.jpg",
        },
        {
            id:'8',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/qk78dGF/Web-SAM-Stanford.jpg",
        },
        {
            id:'9',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/Xb7RWRX/saicell-nitdgp-cover.jpg",
        },
        {
            id:'10',
            width:'1928',
            height:'598',
            url:"https://i.ibb.co/Z8KCt5q/pic11.jpg",
        }
    ]

    return (
        <div className='bannerfunc'>
        <Carousel autoPlay infiniteLoop interval={1700} showThumbs={false} stopOnHover showIndicators={false}>
            {
                images.map((image)=> <img src={image.url} />)
            }
        </Carousel>
        </div>
    )

}
