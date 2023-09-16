import React from "react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, RouterProvider, Route, Router, json ,Link } from "react-router-dom";

function SmallCards() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await fetch("https://tiba-tiba-ngoding.vercel.app/programs/get-allprograms");
      const dataJson = await data.json();
      setProducts(dataJson);
      console.log(dataJson[0]);
      // console.log(products);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    getProducts();

  }, []);

  return (

      <div class="flex justify-center items-start gap-[20px]">
        {products.slice(0,3).map(product => (
        <div class="flex flex-col items-center justify-center w-[247px] h-[322px] p-[30px] border-[0.3px] border-solid border-black rounded-[10px] bg-[#FFF] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] gap-[37px]">
          <div class="flex flex-col justify-center items-start gap-[11px] self-stretch">
            <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
              <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                <div class="w-[202px] h-[133px] rounded-[5px] relative">
                  <img
                    src="assets/Trash.png"
                    alt="Trash"
                    class="w-full h-full absolute inset-0 object-cover"
                  />
                </div>
                <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                  <div class="flex flex-col self-stretch">
                    <p class="text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                      {product.title}
                    </p>
                  </div>

                  <div class="flex flex-col justify-center items-center self-stretch">
                    <div class="self-stretch">
                      <p class="text-[#545F71] font-poppins text-[12px] font-semibold leading-[140%]">
                      {product.tanggal_program_mulai}
                      </p>
                    </div>
                    <div class="self-stretch">
                      <p class="text-[#10436A] font-poppins text-[12px] font-semibold leading-[140%]">
                      {product.lokasi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-center items-center self-stretch">
              <div class="flex items-center gap-[40px] self-stretch">
                <div class="flex flex-col justify-center items-center flex-[1px]">
                  <div class="flex self-stretch">
                    <p class="text-[#545F71] text-[10px] font-normal font-poppins leading-[160%]">
                      Diunggah oleh:
                    </p>
                  </div>
                </div>
                <div class="flex flex-col justify-center items-center flex-[1px]">
                  <div class="flex self-stretch items-center gap-[1px]">
                    <p class="text-right text-[#545F71] font-Poppins text-xs font-normal leading-[19.2px]">
                    {product.posted_by[0].nama}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         ))}
      </div>
  );
}

export default SmallCards;
