import React from 'react';
import Banner from '../components/Banner.js';
import Timer from '../components/Timer.js';
import Sai from '../components/Sai.js';
import Footer from '../footer/Footer.js';
import Review from '../components/Review.js';



export default function Home() {
  return (
    <div>
      <Banner />
      <Timer />
      <Sai />
      <Review />
      <Footer />
    </div>
  )
}
