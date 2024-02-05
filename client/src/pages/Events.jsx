import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'
import '../styles/events.css'
const Events = () => {
  return (
    <Layout>
           <section id="timeline">
  
  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">Registration</p>
    </div>

    <div className="tl-content">
      <h1>4TH-15TH FEBRUARY</h1>
      <p/>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p>Workshop</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">17TH FEB - 10:30 AM</h1>
      <p></p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className=" heading--sanSerif">CTF</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">17TH FEB - 2:00 PM</h1>
      <p></p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">Validictory<br/>Mentions</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">17TH FEB - 5:30 PM</h1>
      <p></p>
    </div>

  </div>
</section>

</Layout>
  )
}

export default Events