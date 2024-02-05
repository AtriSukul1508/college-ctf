import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { RxDiscordLogo } from "react-icons/rx";



const Footer = () => {
  return (
    <>
    <div className='footer'>
    <Box sx={{textAlign: 'center', bgcolor:"#1A1A19", color:'white',p:3}}>
        <Box sx={{my:1, "& svg":{
            fontSize: "60px",
            cursor: "pointer",
            display:"flex",
            justifyContent:"space-around",
            },
            "& svg:hover":{
                color: '#e91e63',
                transform: 'translateX(5px)',
                transition: 'all 500ms',
            },
            "@media (max-width:600px)": {my:-1,
                "& svg":{
                    fontSize: "30px",
                    cursor: "pointer",
                    display:"flex",
                    justifyContent:"space-around",
                    },
            },
        }}>
            <IconButton href="https://www.instagram.com/slay_ctf/?igsh=MXI2dTZlcDB0Z2sycQ%3D%3D" target="_blank" color='inherit'><InstagramIcon/></IconButton>
            <IconButton href="https://twitter.com/i/flow/login?redirect_after_login=%2Fslay_ctf" target="_blank" color='inherit'><XIcon/></IconButton>
            <IconButton href="https://www.linkedin.com/company/slay-ctf/" target="_blank" color='inherit'><LinkedInIcon/></IconButton>
            <IconButton href="https://discord.gg/2ATZUc596Q" target="_blank" color='inherit'><RxDiscordLogo/></IconButton>
            
        </Box>
        <Typography varient="h5" sx={{"@media (max-width:600px)": {
            fontSize: "1rem",
            display:"flex",
            justifyContent:"center",
        },
        }}>
            All Rights Reserved &copy; Z3R0_LOGON
        </Typography>
    </Box>
    </div>
    </>
  )
}

export default Footer