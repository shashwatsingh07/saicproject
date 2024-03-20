import React from 'react';
import Carousel from 'react-grid-carousel';

export default function Review() {
  return (
    <div>
        <h2 style={{fontSize:'50px',fontWeight:'500',textAlign:'center',padding:'10px'}}>Alumni Directory</h2>
    <Carousel cols={2} rows={1} gap={10} loop={true} showDots={true} autoplay={2000} >
        <Carousel.Item>
            <img width={'60%'} style={{padding:'20px'}} src="https://i.ibb.co/qFFN6Q2/review1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width={'60%'} style={{padding:'20px'}} src="https://i.ibb.co/qgcZ5D3/review2.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width={'60%'} style={{padding:'20px'}} src="https://i.ibb.co/jVS59hW/review3.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width={'60%'} style={{padding:'20px'}} src="https://i.ibb.co/1dyJ13r/review4.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width={'60%'} style={{padding:'20px'}} src="https://i.ibb.co/VYzmNFY/review5.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width={'60%'} style={{padding:'20px'}} src="https://i.ibb.co/HpQ7gdZ/review6.jpg" />
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

