import React from 'react'

function Introduction() {
    return (
        <div class="flex justify-center items-center gap-[100px] self-stretch">
            <div class="flex flex-col items-center gap-[20px]">
                <img class="w-[170px] h-[143.846px]" src="assets/Logo.svg" alt="Deskripsi alternatif gambar"/>
                <div class="text-[#71825E] font-Poppins text-[24px] font-bold leading-[140%]">
                    Gotong Ruang
                </div>
            </div>
            <div class="flex flex-col w-[500px] items-start gap-[10px]">
                <div class="text-black font-Poppins text-[14px] font-semibold leading-[140%]">
                    Introduction
                </div>
                <div class="text-black font-Poppins text-[24px] font-bold leading-[140%] tracking-wide">
                    A Community for Change
                </div>
                <div class="self-stretch text-black font-Poppins font-normal text-[14px] leading-[160%]">
                    Gotong Ruang isn't just an app; it's a community of individuals who want to make a difference.
                </div>
            </div>
        </div>
    )
}

export default Introduction