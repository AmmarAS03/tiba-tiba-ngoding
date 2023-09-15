import React from 'react'

function Introduction() {
    return (
        <div class="flex w-full justify-center px-[10px] md:px-[20px] items-center mt-[15px] gap-[20px] md:gap-[100px] self-stretch">
            <div class="flex flex-col items-center gap-[10px] md:gap-[20px]">
                <img class="w-[120px] h-[93.846px]  md:w-[170px] md:h-[143.846px]" src="assets/Logo.svg" alt="Deskripsi alternatif gambar"/>
                <div class="text-[#71825E] text-[12.5px] font-Poppins md:text-[13.75px] lg:text-[24px] font-bold leading-[140%]">
                    Gotong Ruang
                </div>
            </div>
            <div class="flex flex-col w-[200px] md:w-[500px] items-start gap-[10px]">
                <div class="text-black font-Poppins text-[10px] md:text-[14px] font-semibold leading-[140%]">
                    Introduction
                </div>
                <div class="text-black font-Poppins text-[20px] md:text-[24px] font-bold leading-[140%] tracking-wide">
                    A Community for Change
                </div>
                <div class="self-stretch text-black font-Poppins font-normal text-[12px] md:text-[14px] leading-[160%]">
                    Gotong Ruang isn't just an app, it's a community of individuals who want to make a difference.
                </div>
            </div>
        </div>
    )
}

export default Introduction