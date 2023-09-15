import React, { useState, useEffect }from 'react'

function Kegiatan() {
    const [products, setProducts] = useState([]);

  //get all products
  const getProducts = async() => {
    try {
        const data = await fetch("http://localhost:5000/programs/get-allprograms")
        .then((response) => response.json())
        .then((responseData) => {
          setProducts(responseData);
        });
        console.log(products.length);
    } catch (error) {
        console.error(error.message);
    }
  };

  useEffect(() => {      //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    getProducts();
},[]); //[], Anda memberitahu React bahwa efek ini hanya perlu dijalankan sekali saat komponen "ListProduct" pertama kali di-render. 

    return (
        <div class="inline-flex flex-col items-center gap-[30px]">
            <div class="flex flex-col items-center gap-[19px]">
                <div class="flex flex-col items-center gap-[12px]">
                    <div class="text-black font-poppins md:text-[15px] lg:text-[30px] font-bold leading-[140%] tracking-[1.5px]">
                        Lihat Kegiatan saat ini
                    </div>
                    <div class="text-black text-center font-poppins font-normal text-[14px] leading-[160%] w-[760px]">
                        Jelajahi Ragam Kegiatan GotongRuang yang Inspiratif dan Bermakna untuk Bumi dan Komunitas Anda.
                    </div>
                </div>
                <div class="flex justify-center items-start gap-[20px]">
                    
                    {products.slice(0,3).map(product => (
                        <div class="flex flex-col items-center w-[289px] p-[30px] gap-[5px] rounded-[10px] border-[0.3px] border-{#000} bg-[#FFF] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                        <div class="flex flex-col justify-center items-start gap-[11px] self-stretch">
                            <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                                <div class="flex flex-col justify-center items-center gap-[11px] self-stretch">
                                    <img src="assets/Sampah.png" alt="Your Image" class="w-[229px] h-[200px] rounded-[5px]" />
                                    <div class="flex flex-col justify-center items-center gap-5 self-stretch">
                                        <div class="self-stretch text-[#71825E] font-poppins text-[18px] font-bold leading-[140%]">
                                            {product.title}
                                        </div>
                                        <div class="self-stretch text-[#545F71] font-poppins text-[12px] font-semibold leading-[140%]">
                                            Target: {product.target_partisipan} relawan<br /> {product.tanggal_program_mulai}, {product.waktu} WIB <br /> {product.lokasi}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center self-stretch">
                                <div class="self-stretch text-[#545F71] font-poppins text-[12px] font-normal leading-[160%]">
                                    {product.deskripsi}
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center self-stretch">
                            <div class="self-stretch text-[#545F71] font-poppins text-[12px] font-normal leading-[160%]">
                                Diunggah oleh: {product.posted_by[0].nama}
                            </div>
                        </div>
                    </div>
                    ))};
                </div>
            </div>
            <div class="flex justify-end items-center self-stretch">
                <div class="flex w-[250px] h-[50px] p-[8px] justify-center items-center gap-[10px] rounded-[10px] bg-[#71825E]">
                    <div class="flex w-[163px] flex-col justify-center flex-shrink-0 self-stretch text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                        Lihat Kegiatan Lainnya
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kegiatan