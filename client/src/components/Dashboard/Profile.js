
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [lokasi, setLokasi] = useState("");
    const [nama, setNama] = useState("");
    const [id, setId] = useState("");
    const [notelp, setNotelp] = useState("");
    const [point, setPoint] = useState("");
    const [userPosition, setUserPosition] = useState(''); // To store the user's position
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const data = await fetch("http://localhost:5371/users", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });
            const dataJson = await data.json()
            setNama(dataJson.nama);
            setLokasi(dataJson.lokasi);
            setId(dataJson.id);
            setNotelp(dataJson.notelp);
            setPoint(dataJson.total_point);
            getUserPositionInLeaderboard(dataJson);
            // .then((response) => response.json())
            // .then((responseData) => {
            //   setUser(responseData);
            // });
        } catch (error) {
            console.error(error.message);
        }
    };

    const getUserPositionInLeaderboard = async (curr) => {
        try {
            const response = await fetch('http://localhost:5371/users/leaderboard');
            if (!response.ok) {
                throw new Error('Failed to fetch leaderboard data');
            }
            const leaderboardData = await response.json();

            // Find the user's position in the leaderboard using the user's name (nama)
            const userIndex = leaderboardData.findIndex(
                (user) => user.nama === curr.nama || user.total_point === curr.total_point
            );

            if (userIndex !== -1) {
                setUserPosition(userIndex + 1); // Adding 1 to convert from index (0-based) to position (1-based)
            }
        } catch (error) {
            console.error('Error fetching user position:', error.message);
        }
    };


    useEffect(() => {      //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
        getUser();
    }, []);


    return (
        <div class="w-full lg:w-[1190px] py-[30px] px-[110px] flex flex-col items-center flex-shrink-0 lg:gap-4 md:gap-2">
            <div class="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
                <div class="flex justify-center items-center lg:gap-0 gap-4">
                    <div class="w-[109.125px] flex flex-col justify-center items-center gap-3.75">
                        <img src="assets/User.png" alt="Your Image" class="w-[67.5px] h-[67.5px]" />
                    </div>
                    <div class="flex flex-col justify-center items-center gap-[6.5px]">
                        <div class="flex flex-col justify-center items-center gap-[7.5px]">
                            <div class="text-[#000] text-left w-full font-roboto text-base font-normal leading-5 tracking-tighter">
                                {nama}
                            </div>
                            <div class="text-[#000] text-left w-full font-roboto text-base font-normal leading-[22.5px] tracking-[0.281px]">
                                {notelp}
                            </div>
                        </div>
                        <div class="flex w-full justify-start items-center">
                            <img src="assets/Location.svg" alt="Your Image" class="w-[20.25px] h-[20.25px]" />
                            <div class="text-gray-500 font-inter text-[15px] font-medium leading-[8.533px]">
                                {lokasi}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flexbg-[#71825E] w-[1.5px] h-[108.75px]" />
                <div class="flex justify-center items-start gap-[22.5px]">
                    <div class="w-[225px] h-[90px] p-[15.75px 24.75px] flex justify-center items-center gap-[33.75px] rounded-[18px] border-[0.225px] border-solid border-black bg-white shadow-[4.5px_4.5px_2.5px_0px_rgba(0,0,0,0.5)]">
                        <img src="assets/Points.svg" alt="Your Image" class="w-[39.995px] h-[39.951px]" />
                        <div class="flex flex-col items-start">
                            <div class="text-black font-poppins text-xl font-semibold leading-[37.8px]">
                                {point}
                            </div>
                            <div class="text-gray-500 font-inter font-semibold text-sm font-variant-normal leading-normal tracking-[0.029px]">
                                Points
                            </div>
                        </div>
                    </div>
                    <div class="w-[225px] h-[90px] p-[15.75px 24.75px] flex justify-center items-center gap-[33.75px] rounded-[18px] border-[0.225px] border-solid border-black bg-white shadow-[4.5px_4.5px_2.5px_0px_rgba(0,0,0,0.5)]">
                        <img src="assets/Points.svg" alt="Your Image" class="w-[39.995px] h-[39.951px]" />
                        <div class="flex flex-col items-start">
                            <div class="text-black font-poppins text-xl font-semibold leading-[37.8px]">
                                #{userPosition}
                            </div>
                            <div class="text-gray-500 font-inter font-semibold text-sm font-variant-normal leading-normal tracking-[0.029px]">
                                Leaderboard
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-between items-end flex-shrink-0 self-stretch">
                <button onClick={() => navigate("/createprogram")} class="rounded-[10px] bg-[#71825E] w-[350px] h-[60px] py-[8px] px-[22px] flex justify-center items-center gap-[10px] flex-shrink-0">
                    <div class="flex flex-col justify-center flex-1 self-stretch text-white text-center font-poppins font-semibold text-lg leading-[33.6px]">
                        Buat Kegiatan Baru
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Profile