import React from 'react'
import { useNavigate } from "react-router-dom";

function JoinUs() {
    const navigate = useNavigate();

    return (
        <div class="w-[800px] flex flex-col justify-center items-center gap-[30px]">
            <div class="h-[70px] flex flex-col items-center md:gap[6px] lg:gap-[12px] self-stretch">
                <div class="flex flex-col justify-center flex-1 self-stretch text-black text-center font-poppins md:text-[18px] lg:text-[25px] font-bold leading-[140%] tracking-[1.25px]">
                    <p>
                        Setelah membaca kisah inspiratif kami, sudah
                        <span class="text-[#71825E]"> siap </span>
                        untuk
                        <span class="text-[#71825E]"> Bergabung? </span>
                    </p>
                </div>
            </div>
            <button onClick={() => navigate("/login")} class="flex md:w-[200px] lg:w-[250px] md:h-[45px] lg:h-[50px] p-[8px] justify-center items-center gap-[10px] rounded-[10px] bg-[#71825E]">
                <div class="flex w-full flex-col justify-center flex-shrink-0 self-stretch text-white text-center font-poppins md:text[7px] lg:text-[14px] font-semibold leading-[140%]">
                    Lihat Kegiatan Lainnya
                </div>
            </button>
            <div class="h-126 flex flex-col items-center gap-[12px] self-stretch">
                <div class="flex flex-col justify-center flex-1 self-stretch text-black text-center font-poppins md:text-[23px] lg:text-[30px] font-bold leading-[140%] tracking-[1.5px]">
                    <p>
                        Ayo, jadilah bagian dari perubahan positif untuk
                        <span class="text-[#71825E]"> Bumi </span>
                        dan komunitas. Bergabunglah dengan
                        <span class="text-[#71825E]"> GotongRuang </span> sekarang!
                    </p>
                </div>
            </div>
        </div>

    )
}

export default JoinUs