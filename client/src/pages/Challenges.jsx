import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ParticlesBackground from "../components/Layout/ParticlesBackground";
import { useAuthContext } from "../hooks/useAuthContext";
import '../styles/challenges.css'
import ChallengeList from "./ChallengeLIst";
import apiConfig from "../api.config";




export default function Challenges() {

    // var countDownDate = new Date("Feb 17, 2024 14:00:00").getTime();
    const { user } = useAuthContext();
    const [challenges,setChallenge] = useState([])
    const Categories = ['crypto','forensics','osint','pwn','rev','sanity','web']

    useEffect(() => {
        // setChallenge(dummyChallenges);
        const fetchChallenges = async () => {
            const response = await fetch(apiConfig.URL + '/challengeapi/challenge', {
            method:"GET",
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
            })
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                console.log(data.challenges);
                setChallenge(data.challenges);
                // console.log(challenges);
            }
        }
        // if(user){
            fetchChallenges();
        // }
    }, [])

    return (
        <Layout>
            <ParticlesBackground />
            <section className="my-4">
            <div className="flex justify-center">
                             <h1 className="w-fit my-1.5 pt-0 px-2 pb-2 font-curlfont text-[2.5rem] font-bold text-white tracking-[4px] rounded-lg backdrop-blur-sm shadow-[0_0_4px_rgba(50,69,107,0.5)]">
                                Challenges
                            </h1>
            </div>
                {/* <h1 className="font-curlfont my-4 text-[3rem]">Challenges</h1> */}
                <div className="mx-auto w-2/3 flex flex-col justify-center gap-[2rem]">
                    {Categories.map((category,ind)=>{
                        {/* return (<ChallengeList challenges={challenges} category={category} />) */}
                        return (
                            <>
                            <h2 className="text-white my-2">{category}</h2>
                            <ul className="flex justify-start items-center gap-4 flex-wrap">
                            {challenges.filter((challenge) => challenge.category === category).map((chal,inde)=>{
                                return (<ChallengeList challenge={chal} index={inde} />)
                            })}
                        </ul></>)
                    })}
                </div>
            </section>
        </Layout>
    )


}
