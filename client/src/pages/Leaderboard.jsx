import React, { useState } from "react";

import Table from "./Table";

import data from "../Data/data.json";
import '../styles/leaderboard.css'
import Layout from "../components/Layout/Layout";
import ParticlesBackground from "../components/Layout/ParticlesBackground";
import { useAuthContext } from "../hooks/useAuthContext";
import apiConfig from "../api.config";
const Leaderboard = () => {
    //   const isModalOpen = useRecoilValue(modalState);
    const {user} = useAuthContext();
    const [tableData, setTableData] = useState(data.data);
    const [searchText, setSearchText] = useState([]);
    console.log(data.data)
    React.useEffect(() => {
        const fetchLeaderboard = async () => {
            const response = await fetch(apiConfig.URL + '/userapi/leaderboard', {
                method:"GET",

            })
            const data = await response.json();
            console.log('asdkjh')
            if (response.ok) {
                console.log(data.leaderboard,data.leaderboard[0].name,data.leaderboard[0].college,data.leaderboard[0].score,data.leaderboard[0].challengeCount)
                setSearchText(data.leaderboard);
                console.log('t',searchText,tableData)
            }
        }
        if (user) {

            fetchLeaderboard()
        }
    }, [])
    
    return (
        <>
            <Layout>
                <ParticlesBackground />
                <section className="relative mx-auto mt-32 mb-12 leaderboard">
                    <div className="px-5 lg:px-0">
                        <div className="relative my-10 mx-auto flex justify-center items-center flex-col text-center lg:mx-8 sm:mx-2">
                            <h2 className="my-1.5 pt-0 px-2 pb-2 font-curlfont text-[2.5rem] font-bold text-white tracking-[4px] rounded-lg shadow-[0_0_4px_rgba(50,69,107,0.5)]">
                                SLAY_CTF Leaderboard
                            </h2>
                            <p className="my-4 font-codefont text-2xl font-medium text-white tracking-wide">
                                Check your position!
                            </p>

                        </div>



                        <Table
                            data={searchText}
                        />
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Leaderboard;
