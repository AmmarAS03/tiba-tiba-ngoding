import React, { useState, useEffect }from "react";
import { json } from "react-router-dom";
import Product from "../Product";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getProducts = async() => {
    try {
        const data = await fetch("http://localhost:5000/programs/get-allprograms")
        .then((response) => response.json())
        .then((responseData) => {
          setProducts(responseData);
        });
    } catch (error) {
        console.error(error.message);
    }
  };

  useEffect(() => {      //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    getProducts();
},[]); //[], Anda memberitahu React bahwa efek ini hanya perlu dijalankan sekali saat komponen "ListProduct" pertama kali di-render. 

  return (
    <div className="flex flex-col items-center gap-[30px] flex-1 bg-[#FFF]"
     style={{ paddingLeft: '300px', paddingRight: '100px', paddingTop: '100px', paddingBottom: '150px' }}>
      <h2 class="text-black text-right font-poppins text-[32px] font-bold leading-[140%]">
        Daftar Kegiatan
      </h2>

      <div class="flex justify-center items-start gap-[32px] self-stretch">
        <div class="flex p-[10px] [20px] items-center gap-[30px] flex-1 rounded-[10px] bg-[var(--Tertiary, #EEF1F4)] shadow-md">
          <div class="flex w-[34.669px] h-[35px] flex-col justify-center items-center">
            <div class="w-[34.669px] h-[35px] flex-shrink-0">
              <img src="assets/Glass.svg" alt="Glass" class="w-full h-full" />
            </div>
          </div>
          <label class="text-[#8E8E93] text-right font-poppins text-25 font-normal leading-[140%]">
            Search
          </label>
        </div>

        <div class="flex w-[304px] h-[55px] p-[0px] [10px] justify-center items-center rounded-[10px] bg-[var(--Tertiary, #EEF1F4)] shadow-md">
          <div class="w-[258px] flex-shrink-0 text-[#8E8E93] font-dmsans text-[20px] font-normal leading-normal">
            Daerah Istimewa Yogyakarta
          </div>

          <img
            class="w-26 h-26 flex-shrink-0 text-[#8E8E93]"
            src="assets/Cheveron.svg"
            alt="Glass"
          />
        </div>
      </div>

      <div class="flex flex-col items-center gap-[20px]">

        {products.map(product => (
          <div key={product.id} class="flex w-[900px] p-[30px] [10px] flex-row items-center gap-[20px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]">
          <div class="flex p-[0px] flex-col justify-center items-start gap-[18px] flex-[1px]">
            <div class="flex flex-col justify-center items-center self-stretch">
              <h4 class="self-stretch text-black font-poppins text-[20px] font-bold leading-[140%]">
                {product.title}
              </h4>
            </div>

            <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-semibold leading-[140%]">
              <p>Target: {product.target_partisipan} relawan</p>
              <p>{product.tanggal_program_mulai}, 17:00 WIB</p>
              <p>{product.lokasi}</p>
            </div>

            <div class="flex flex-col justify-center items-center self-stretch">
              <div class="h-[38px] self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                <p>
                  {product.deskripsi}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-[40px] self-stretch">
              <div class="flex flex-col justify-center items-center flex-1">
                <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                  <p>Diunggah oleh: {product.posted_by[0].nama} </p>
                </div>
              </div>

              <div class="flex flex-col justify-center items-center flex-1">
                <div class="self-stretch text-[var(--Primary, #545F71)] text-right font-poppins text-12 font-normal leading-[160%]">
                </div>
              </div>
            </div>
          </div>

          <div class="w-[300px] h-[237px] rounded-[5px]">
          <img src={`http://localhost:5000/api/getImage/${product.id}`} alt="Foto" className="w-full h-full" />
          </div>
        </div>
        ))};
        




        {/* <div class="flex w-[900px] p-[30px] [10px] flex-row items-center gap-[20px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]">
          <div class="flex p-[0px] flex-col justify-center items-start gap-[40px] flex-[1px]">
            <div class="flex flex-col justify-center items-center self-stretch">
              <h4 class="self-stretch text-black font-poppins text-[20px] font-bold leading-[140%]">
                Membersihkan Danau Kenanga
              </h4>
            </div>

            <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-semibold leading-[140%]">
              <p>Target: 15 relawan</p>
              <p>20 September 2023, 17:00 WIB</p>
              <p>Depok, Jawa Barat</p>
            </div>

            <div class="flex flex-col justify-center items-center self-stretch">
              <div class="h-[38px] self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ...
                </p>
              </div>
            </div>

            <div class="flex items-center gap-[40px] self-stretch">
              <div class="flex flex-col justify-center items-center flex-1">
                <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                  <p>Diunggah oleh: Sarah Smith</p>
                </div>
              </div>

              <div class="flex flex-col justify-center items-center flex-1">
                <div class="self-stretch text-[var(--Primary, #545F71)] text-right font-poppins text-12 font-normal leading-[160%]">
                  <p>pppo</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[300px] h-[237px] rounded-[5px]">
            <img src="assets/Sampah.png" alt="Sampah" class="w-full h-full" />
          </div>
        </div>



        <div class="flex w-[900px] p-[30px] [10px] flex-row items-center gap-[20px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]">
          <div class="flex p-[0px] flex-col justify-center items-start gap-[40px] flex-[1px]">
            <div class="flex flex-col justify-center items-center self-stretch">
              <h4 class="self-stretch text-black font-poppins text-[20px] font-bold leading-[140%]">
                Membersihkan Danau Kenanga
              </h4>
            </div>

            <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-semibold leading-[140%]">
              <p>Target: 15 relawan</p>
              <p>20 September 2023, 17:00 WIB</p>
              <p>Depok, Jawa Barat</p>
            </div>

            <div class="flex flex-col justify-center items-center self-stretch">
              <div class="h-[38px] self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ...
                </p>
              </div>
            </div>

            <div class="flex items-center gap-[40px] self-stretch">
              <div class="flex flex-col justify-center items-center flex-1">
                <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                  <p>Diunggah oleh: Sarah Smith</p>
                </div>
              </div>

              <div class="flex flex-col justify-center items-center flex-1">
                <div class="self-stretch text-[var(--Primary, #545F71)] text-right font-poppins text-12 font-normal leading-[160%]">
                  <p>pppo</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[300px] h-[237px] rounded-[5px]">
            <img src="assets/Sampah.png" alt="Sampah" class="w-full h-full" />
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default ListProduct;
