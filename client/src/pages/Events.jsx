import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'
import ParticlesBackground from '../components/Layout/ParticlesBackground'
import '../styles/events.css'
import Ghost from '../styles/ghost.png'
const Events = () => {
  return (
    <Layout>

    <ParticlesBackground/>

      <div class="design-section">
        <div class="timeline">


          <div class="timeline-empty">
          </div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content">
          <h3><img src={Ghost} id='ghost' />Registration</h3>
            <p id='date'>4th Feb - 15th Feb</p>
          </div>
          <div class="timeline-component timeline-content">
            <h3><img src={Ghost} id='ghost' />Inauguration</h3>
            <p>10.00 AM - 10.30 AM</p><p id='date'> 17th Feb</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty">
          </div>

          <div class="timeline-empty">
          </div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3><img src={Ghost} id='ghost' />Workshop</h3>
            <p>10.30 AM - 01.00 PM</p><p id='date'> 17th Feb</p>
          </div>

          <div class="timeline-component timeline-content">
            <h3><img src={Ghost} id='ghost' />Lunch Break</h3>
            <p>01.00 PM - 02.00 PM</p><p id='date'> 17th Feb</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty">
          </div>

          <div class="timeline-empty">
          </div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3><img src={Ghost} id='ghost' />CTF</h3>
            <p>02.00 PM - 04.30 PM</p><p id='date'>17th Feb</p>
          </div>


          <div class="timeline-component timeline-content">
            <h3><img src={Ghost} id='ghost' />Result Annoucement & Validictory </h3>
            <p>04.30 PM - 05.00 PM</p><p id='date'> 17th Feb</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty">
          </div>

          <div class="timeline-empty">
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3><img src={Ghost} id='ghost' />Ending Ceremony</h3>
            <p>05.00 PM - 05.30 PM</p><p id='date'>17th Feb</p>
          </div>


        </div>
      </div>

    </Layout>
  )
}

export default Events