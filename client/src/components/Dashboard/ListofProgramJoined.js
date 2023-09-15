import React, { useState, useEffect } from 'react'

const ListofProgramJoined = () => {
    const [products, setProducts] = useState([]);

  //get products that user joined
  const getProducts = async() => {
    try {
        const data = await fetch("http://localhost:5000/participants/get-joinedprog", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const dataJson = await data.json()
        setProducts(dataJson);
        // console.log("masuk3");
        // console.log(products);
        // console.log("masuk4");
        // .then((response) => response.json())
        // .then((responseData) => {
        //   setProducts(responseData);
        // });
        // console.log(products);
    } catch (error) {
        console.error(error.message);
    }
  };

  useEffect(() => {      //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    getProducts();
},[]); //[], Anda memberitahu React bahwa efek ini hanya perlu dijalankan sekali saat komponen "ListProduct" pertama kali di-render. 

    return (
        <div class="flex flex-col pt-[20px] justify-center items-center gap-[20px]">
            <div class="flex flex-col items-center gap-[23px]">
                <div class="flex flex-col w-[1190.25px] items-start gap-[30px] px-[50px]">
                    <div class="w-[993px] text-black font-poppins text-2xl font-bold leading-[28px]">
                        Kegiatan yang kamu ikuti
                    </div>
                    <div class="flex items-center content-center gap-[30px] flex-wrap">

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
                            <div class="flex items-center gap-[40px] self-stretch">
                                <div class="flex flex-col justify-center items-center flex-[1_1_0]">
                                    <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-normal leading-[19.2px]">
                                        Diunggah oleh:
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center flex-[1_1_0]">
                                    <div class="self-stretch text-right text-[#545F71] font-Poppins text-[12px] font-normal leading-[19.2px]">
                                        {product.posted_by}
                                    </div>
                                </div>
                            </div>

                        </div>
                        ))}

                    </div>
                </div>
                <div class="flex flex-col justify-center items-end gap-[10px] self-stretch">
                    <div class="w-[250px] h-[50px] py-[8px] px-[22px] flex justify-center items-center gap-[10px] rounded-[10px] bg-[#71825E]">
                        <div class="w-[163px] h-[39px] flex flex-col justify-center items-center gap-[6px] text-white text-center">
                            <p class="font-poppins text-[14px] font-semibold leading-5">Lihat Kegiatan Lainnya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListofProgramJoined