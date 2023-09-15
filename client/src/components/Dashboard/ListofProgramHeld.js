import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const ListofProgramHeld = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    //get product that made by the user
    const getMadeProducts = async () => {
        try {
            const data = await fetch("http://localhost:5371/programs/get-madeprograms", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });
            const dataJson = await data.json()
            setProducts(dataJson);
            // Axios.get("http://localhost:5000/programs/get-madeprograms")
            // .then((response) => response.json())
            // .then((responseData) => {
            //     setProducts(responseData);
            // });

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getMadeProducts();
    }, []);



    return (
        <div class="w-full flex flex-col py-[20px] px-[110px] justify-center items-center gap-[20px]">
            <div class="w-full flex flex-col items-center gap-[23px]">
                <div class="w-full flex flex-col items-start gap-[30px] px-[50px]">
                    <div class="w-full text-black font-poppins text-2xl font-bold leading-[28px]">
                        Kegiatan yang kamu selenggarakan
                    </div>
                    <div class="flex items-center content-center gap-[30px] flex-wrap ">

                        {products.map(product => (
                            <div key={product.id} class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                                <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                                    <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                                        <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                                        <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                                            <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                                                {product.title}
                                            </div>
                                            <div class="flex flex-col justify-center items-center self-stretch">
                                                <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                                                    {product.tanggal_program_mulai}, {product.waktu} WIB
                                                </div>
                                                <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                                                    {product.lokasi}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="self-stretch flex justify-end items-center gap-[20px]">
                                    <img src="assets/Trash.svg" alt="Your Image" onClick={() => `attendance/${product.id}`} class="w-[18px] h-[20px]" />
                                    <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                                    <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                                </div>
                            </div>
                        ))};
                    </div>
                </div>
                <div class="flex flex-col justify-center items-end gap-[10px] self-stretch px-[50px]">
                    <button onClick={() => navigate("/myactivity")} class="w-[250px] h-[50px] py-[8px] px-[22px] flex justify-center items-center gap-[10px] rounded-[10px] bg-[#71825E]">
                        <div class="w-[163px] h-[39px] flex flex-col justify-center items-center gap-[6px] text-white text-center">
                            <p class="font-poppins text-[14px] font-semibold leading-5">Lihat Kegiatan Lainnya</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ListofProgramHeld;