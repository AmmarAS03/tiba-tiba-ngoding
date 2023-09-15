import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Product from "../Product";

function Activity() {
  const [products, setProducts] = useState([]);

  //get all products
  const getProducts = async () => {
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
  }, []); //[], Anda memberitahu React bahwa efek ini hanya perlu dijalankan sekali saat komponen "ListProduct" pertama kali di-render. 

  return (
    <div className="flex flex-col items-center gap-[30px] flex-1 bg-[#FFF] ml-[249.75px]"
      style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', paddingBottom: '100px' }}>
      <h2 class="text-black text-right font-poppins text-[32px] font-bold leading-[140%]">
        Kegiatan yang Telah Diselenggarakan oleh User
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

        <div class="flex flex-col w-full items-start gap-[30px]">
          <div class="flex items-center content-center gap-[30px] flex-wrap ">
            <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                  <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                  <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                    <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </div>
                    <div class="flex flex-col justify-center items-center self-stretch">
                      <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                        20 September 2023
                      </div>
                      <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                        Depok, Jawa Barat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="self-stretch flex justify-end items-center gap-[20px]">
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
              </div>
            </div>
            <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                  <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                  <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                    <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </div>
                    <div class="flex flex-col justify-center items-center self-stretch">
                      <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                        20 September 2023
                      </div>
                      <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                        Depok, Jawa Barat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="self-stretch flex justify-end items-center gap-[20px]">
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
              </div>
            </div>
            <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                  <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                  <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                    <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </div>
                    <div class="flex flex-col justify-center items-center self-stretch">
                      <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                        20 September 2023
                      </div>
                      <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                        Depok, Jawa Barat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="self-stretch flex justify-end items-center gap-[20px]">
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
              </div>
            </div>
            <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                  <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                  <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                    <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </div>
                    <div class="flex flex-col justify-center items-center self-stretch">
                      <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                        20 September 2023
                      </div>
                      <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                        Depok, Jawa Barat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="self-stretch flex justify-end items-center gap-[20px]">
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
              </div>
            </div>
            <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                  <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                  <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                    <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      Membersihkan Danau Kenanga
                    </div>
                    <div class="flex flex-col justify-center items-center self-stretch">
                      <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                        20 September 2023
                      </div>
                      <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                        Depok, Jawa Barat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="self-stretch flex justify-end items-center gap-[20px]">
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                <img src="assets/Trash.svg" alt="Your Image" class="w-[18px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Activity;
