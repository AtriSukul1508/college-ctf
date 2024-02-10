import { Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import ParticlesBackground from "../components/Layout/ParticlesBackground";
import '../styles/challenges.css'


export default function Challenges() {

    var countDownDate = new Date("Feb 17, 2024 14:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds


        if (distance < 0) {
            clearInterval(x)
            document.getElementById("days").innerHTML = "00"
            document.getElementById("hours").innerHTML = "00"
            document.getElementById("minutes").innerHTML = "00"
            document.getElementById("seconds").innerHTML = "00"
        }

    }, 1000)


    return (
        <Layout>
            <ParticlesBackground />
            <Typography variant='h2' sx={{ display: "flex", justifyContent: "center", height: "750px", alignItems: "center", color: "green" }}>
                <div>
                    <h1><span id="aaa">Challenges</span> coming sooon!!</h1><br />

                    <div class="launch-time">
                        <div>
                            <p id="days">00</p>
                            <span>Days</span>
                        </div>
                        <div>
                            <p id="hours">00</p>
                            <span>Hours</span>
                        </div>
                        <div>

                            <p id="minutes">00</p>
                            <span>Minutes</span>
                        </div>
                        <div>

                            <p id="seconds">00</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </Typography>
        </Layout>
    )


}
