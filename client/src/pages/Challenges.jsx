import { Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import ParticlesBackground from "../components/Layout/ParticlesBackground";


export default function Challenges(){
    return(
        <Layout>
            <ParticlesBackground/>
            <Typography variant='h2' sx={{display: "flex", justifyContent: "center", height: "650px", alignItems: "center", color:"green"}}>
                Challenges coming sooon!!
            </Typography>
        </Layout>
    )
}
