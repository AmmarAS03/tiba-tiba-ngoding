import React, { useState, useEffect } from "react";
import Product from "../Product";

const Activity = () => {
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
},[]);

  return (
    <div
      className="flex flex-col items-center gap-[64px] flex-1 bg-[#FFF]"
      style={{
        paddingLeft: "300px",
        paddingRight: "100px",
        paddingTop: "100px",
        paddingBottom: "150px",
      }}
    >
      <div class="inline-flex flex-col items-center gap-[70px]">
        <p class="text-right text-[#71825E] font-Poppins text-[32px] font-bold leading-[140%]">
          Aktivitas yang Saya Ikuti
        </p>
        <div class="flex flex-col items-center gap-[15px]">
            {/* Tabel Mulai Dari bawah sini */}
          {products.map(product => (
            <div class="flex flex-col items-center w-[900px] h-[30px] px-[10px] gap-[5px] border border-solid border-black rounded-[10px] bg-[var(--Primary---White, #FFF)]">
            <div class="flex justify-between items-center self-stretch px-[20px]">
              <div class="flex flex-col justify-center items-start gap-[40px] flex-[1px]">
                <div class="flex justify-center items-center self-stretch">
                  <div class="flex-[1px]">
                    <p class="text-black font-Poppins text-[20px] font-bold leading-[140%]">
                    {product.title}
                    </p>
                  </div>
                  <div class="flex-[1px]">
                    <p class="text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                    {product.tanggal_program_mulai}, {product.waktu} WIB
                    </p>
                  </div>

                  {/* <div
                    class="flex w-[1190px] h-[350px] p-[10px] flex-col justify-center items-center gap-[10px]"
                    style={{
                      background:
                        'url("assets/Anak.png") lightgray 50% / cover no-repeat',
                    }}
                  ></div> */}
                  <img src="assets/trashicon.png" alt="Trash Icon" class="w-[20px] h-[20px]"/>
                </div>
              </div>
            </div>
          </div>
          ))};

        </div>
      </div>
    </div>
  );
}

export default Activity;
