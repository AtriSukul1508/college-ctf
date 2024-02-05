import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import ParticlesBackground from '../components/Layout/ParticlesBackground'




const About = () => {
  return (
    // <Box sx={{bgcolor:"black"}}>
    <Layout>
        <ParticlesBackground/>
        <Box sx={{
          my: 15,
          textAlign: "center",
          p:2,
          "& h4":{
            fontWeight: 'bold',
            my:2,
            fontSize: "3rem"
          },
          "& p":{
            margin: "10px",
            color: "green",
            textAlign: 'justify',
            fontSize:"1.3rem"
          },
          "& ul":{
            color:"green",
            fontSize:"1.3rem",
            margin:"20px",
          },
          "& h1":{
            // display:"flex",
            // justifyContent:'left',
            color:"#ff004e",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            }
          }
        }}>
          <Typography variant="h4" color="#ff004e">
            Welcome to the Slay_Ctf
          </Typography>
          <Typography variant="h8" color="#ff004e">
            by Z3R0_LOGON <span style={{color:'white'}}>x</span> CSE dept. JGEC
          </Typography>
          <p>
          SLAY CTF is a hybrid Jeopardy-style contest where participants can test their cybersecurity skills and compete for prizes.
          Z3R0_L0G0N is the cyber security club of JGEC. We are trying to build a community in North Bengal to learn from others and share our knowledge. We hope the participants will be encourage to learn more on this field through the CTF.</p>
          <br/>
          <h1>RULES :</h1>
          <ul>
              <li style={{textAlign:"left"}}>Participants are allowed to use any tool on the challenges (not on the website)</li>
              <li style={{textAlign:"left"}}>Flag sharing is prohibited (if caught then we will directly disqualify them)</li>
              <li style={{textAlign:"left"}}> Time duration : 2.30 hour  </li>
        </ul>
        <br></br>
        <p>For further information follow us on the Social Media Handles Given Below</p>

        </Box>
        
    </Layout>
    // </Box>
  )
}

export default About