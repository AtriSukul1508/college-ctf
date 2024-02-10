import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import ParticlesBackground from '../components/Layout/ParticlesBackground'
import '../styles/about.css'


const About = () => {
          // var now = new Date().getTime();
          
          // var hours = Math.floor((now%(1000*60*60*24))/(1000*60*60))
          //   var minutes = Math.floor((now%(1000*60*60))/(1000*60))
          //   var seconds = Math.floor((now%(1000*60))/1000)

          //   document.getElementById("hours").innerHTML = hours
          //   document.getElementById("minutes").innerHTML = minutes
          //   document.getElementById("seconds").innerHTML = seconds       
  return (
    // <Box sx={{bgcolor:"black"}}>
    <Layout>
      <Box sx={{
        color: "white",

      }}>
        <ParticlesBackground/>

        <div className="container">
          <h1>Welcome to the SLAY_<span id='slay'>CTF</span></h1>
          <span id='present'>presented by Z3R0_LOGON x Dept. of CSE, JGEC</span>

         <div className="rule">
         <p className='ruleh'>Rules</p>
          <ul>
            <li id="r">Participants are allowed to use any tool (online / offline) for solving the challenges</li>
            <li id="r">Flag sharing is strictly prohibited. It will cause ban from the CTF for both the players</li>
            <li id="r">The time duration of the CTF is 2.30 hours</li>
            <li id="r">Any type of attack on the CTF website is strictly prohibited</li>
          </ul>
         </div>


          <div className="faq">
            <p className='faqh'>FAQ</p>
            <ul>
              <li id="q">What is the SLAY_CTF?</li>
              <p id="a">
                {'>'} SLAY_CTF is an hybrid mode jeopardy-CTF competition. 
                "Capture The Flag" (CTF) competitions are not related
                to running outdoors or playing first-person shooters. Instead,
                they consist of a set of computer security puzzles (or challenges)
                involving reverse-engineering, memory corruption, cryptography,
                web technologies, and more. When players solve them they get a "flag",
                a secret string which can be exchanged for points. The more points
                a player earns, the higher up they move in rank.
              </p>

              <li id="q">What is the prize?</li>
              <p id="a">
              {'>'} The top 2 from both online and onsite winners will get exciting prizes. The participants
                will get participation certificate and goodies.
              </p>

              <li id="q">How does it work?</li>
              <p id="a">
              {'>'} If this is your first time playing a CTF, take a look at 
                this <a href="https://www.youtube.com/watch?v=8ev9ZX9J45A"> video</a>, and 
                this <a href="https://trailofbits.github.io/ctf/">guide</a> .
                In summary, we will release several challenges during the CTF, and each challenge has a
                secret value (a "flag") with the format slay{'{flag}'}. If you find the flag, you can submit it for points.
              </p>

              <li id="q">Where can I ask a question?</li>
              <p id="a">
                {'>'} You can reach us by email at <a href="mailto:contact.slayctf@gmail.com">contact.slayctf@gmail.com</a> or join the <a href="https://discord.gg/2ATZUc596Q">Discord</a> .
              </p>

            </ul>
          </div>



        </div>

        

      </Box>

    </Layout>
  )
}

export default About