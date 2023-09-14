import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    return (
        <div class="w-[1190px] h-[269px] py-[30px] px-[110px] justify-between flex flex-col items-center flex-shrink-0">
            <div class="w-[962.375px] flex justify-between items-center">
                <div class="flex justify-center items-center gap-[3.75px]">
                    <div class="w-[109.125px] flex flex-col justify-center items-center gap-3.75">
                        <img src="assets/User.png" alt="Your Image" class="w-[67.5px] h-[67.5px]" />
                    </div>
                    <div class="flex flex-col justify-center items-center gap-[6.5px]">
                        <div class="flex flex-col justify-center items-center gap-[7.5px]">
                            <div class="text-[#000] text-center font-roboto text-base font-normal leading-5 tracking-tighter">
                                youremail@domain.com
                            </div>
                            <div class="text-[#000] text-center font-roboto text-base font-normal leading-[22.5px] tracking-[0.281px]">
                                +628111103857
                            </div>
                        </div>
                        <div class="flex justify-center items-center gap-[3px]">
                            <img src="assets/Location.svg" alt="Your Image" class="w-[20.25px] h-[20.25px]" />
                            <div class="text-gray-500 font-inter text-[9.75px] font-medium leading-[8.533px]">
                                DKI Jakarta
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-[#71825E] w-[1.5px] h-[108.75px]" />
                <div class="flex justify-center items-start gap-[22.5px]">
                    <div class="w-[225px] h-[90px] p-[15.75px 24.75px] flex justify-center items-center gap-[33.75px] rounded-[18px] border-[0.225px] border-solid border-black bg-white shadow-[4.5px_4.5px_2.5px_0px_rgba(0,0,0,0.5)]">
                        <img src="assets/Points.svg" alt="Your Image" class="w-[39.995px] h-[39.951px]" />
                        <div class="flex flex-col items-start">
                            <div class="text-black font-poppins text-xl font-semibold leading-[37.8px]">
                                55
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
                                #2
                            </div>
                            <div class="text-gray-500 font-inter font-semibold text-sm font-variant-normal leading-normal tracking-[0.029px]">
                                Leaderboard
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col h-[50px] justify-between items-end flex-shrink-0 self-stretch">
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