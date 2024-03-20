import React,{useState} from 'react'
import background from '../assets/home1.jpg';
import saiclogo from '../assets/saic_logo_round.jpg';
import middlephoto from '../assets/event_bg.jpg';
import './Timer.css';
import CountdownTimer from './CountdownTimer';
import Moment from 'react-moment';
import Textslide from './Textslide.js';


export default function Timer() {
    

  return (
    <div className='container'>
        <img src={background} style={{width:'100%'}} />
        <div className='topright'>
            <h3 style={{textAlign:'center',paddingTop:'40px'}}>Notice</h3>
            <Textslide />
        </div>
        <div className='topleft'>
            <img src={saiclogo} />
        </div>
        <div className='bottom-left'>
                <pre>#LegacyLinkers</pre>
                <pre>"Fostering connections,Fuelling Opportunities".</pre>
        </div>
        <div className='middle'>
            <img src={middlephoto} />
        </div>
        <div className='countdowntimer'>
            <center>
            <pre>Upcoming Event</pre>
                <div className='timer'> 

                    {/* Bhaiya timer nahi ban paya. Maine Moment use karne ka try kiya , react-moment bhi try kiya , par mujhse abhi nahi ho paya deadline tak. I am still trying and I will do it , I am learning.
                    Sorry Bhaiya. */}

                    <CountdownTimer duration={264*24*60*60*1000}/>
                </div>
            </center>  
        </div>
        <div className='text-timer'>
            <p>
                <pre>Industry Insights</pre>
                <pre>
                    <small> Mr. Subhadeep Banduri</small>
                </pre>
                <pre>on 1 <st>st</st> July,2023</pre>
                <pre>6:00 pm IST</pre>
            </p>
        </div>
    </div>
  )
}
