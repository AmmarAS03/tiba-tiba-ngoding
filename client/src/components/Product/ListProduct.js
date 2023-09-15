import React, { useState, useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Route, json } from "react-router-dom";
import Product from "../Product";
import Footer from "../UI/Commons/Footer";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pilih Daerah");
  const inputRef = useRef(null);

  //get all products
  const getProducts = async () => {
    try {
      const data = await fetch("http://localhost:5371/programs/get-allprograms")
        .then((response) => response.json())
        .then((responseData) => {
          setProducts(responseData);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleDropdown = () => {
    if (
      !inputRef.current ||
      !inputRef.current.contains(document.activeElement)
    ) {
      setDropdownOpen(!isDropdownOpen);
    }
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".dropdown-container") && isDropdownOpen) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    getProducts();

  }, []); //[], Anda memberitahu React bahwa efek ini hanya perlu dijalankan sekali saat komponen "ListProduct" pertama kali di-render.

  return (
    <div
      class="flex flex-col items-center gap-[30px] flex-[1px] bg-[#FFF]"
      style={{
      
        paddingTop: "170px",
      }}
    >
      <h2 class="text-black text-right font-poppins text-[32px] font-bold leading-[140%]">
        Daftar Kegiatan
      </h2>


      <div
        class="flex justify-center items-start gap-[32px] self-stretch"
        style={{
          paddingLeft: "100px",
          paddingRight: "50px",
        }}
      >
        <div
          class={`flex p-[10px] [20px] items-center gap-[30px] flex-[1px] rounded-[10px] bg-var(--Tertiary, #EEF1F4) shadow-md cursor-pointer ${
            isDropdownOpen ? "rounded-b-none" : ""
          }`}
          onClick={toggleDropdown}
        >

          <div class="flex w-[34.669px] h-[35px] flex-col justify-center items-center">
            <div class="w-[34.669px] h-[35px] flex-shrink-0">
              <img src="assets/Glass.svg" alt="Glass" class="w-full h-full" />
            </div>
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="text-[#8E8E93] text-start w-[590px] font-poppins text-[25px] font-normal leading-[140%] border-none outline-none bg-transparent user-input"
          />
        </div>
        
        <div class="relative inline-block">
          <div
            class={`flex w-[304px] h-[55px] p-[0px] [10px] justify-center items-center rounded-[10px] bg-[var(--Tertiary, #EEF1F4)] shadow-md cursor-pointer`}
            id="dropdownButton"
            onClick={toggleDropdown}
          >
            <div class="w-[258px] flex-shrink-[0px] text-black font-dmsans text-[20px] font-normal leading-normal">
              <span id="selectedOption">{selectedOption}</span>
            </div>
            <img
              class={`w-[26px] h-[26px] flex-shrink-[0px] text-[#8E8E93] transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              src="assets/Cheveron.svg"
              alt="Dropdown"
              id="dropdownIcon"
            />
          </div>

          {isDropdownOpen && (
            <div
              class="absolute top-[60px] left-[0px] z-[10px] w-[304px] bg-[var(--Tertiary, #EEF1F4)] shadow-md border-none outline-none bg-transparent rounded-b-[10px]"
              id="dropdownOptions"
            >
              <div
                class=" py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("DKI Jakarta")}
              >
                DKI Jakarta
              </div>
              <div
                className="  py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Banten")}
              >
                Banten
              </div>
              <div
                className=" py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Jawa Barat")}
              >
                Jawa Barat
              </div>
              <div
                className="py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Jawa Tengah")}
              >
                Jawa Tengah
              </div>
              <div
                className="py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Jawa Timur")}
              >
                Jawa Timur
              </div>
              <div
                className="py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Daerah Istimewa Yogyakarta")}
              >
                Daerah Istimewa Yogyakarta
              </div>
              <div
                className="py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Bali")}
              >
                Bali
              </div>
            </div>
          )}
        </div>
      </div>

      <div class="flex flex-col items-center gap-[20px]">
        {products.map((product) => (
          <div
            key={product.id}
            class="flex w-[900px] p-[30px] [10px] flex-row items-center gap-[20px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]"
          >
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
                  <p>{product.deskripsi}</p>
                </div>
              </div>

              <div class="flex items-center gap-[40px] self-stretch">
                <div class="flex flex-col justify-center items-center flex-1">
                  <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                    <p>Diunggah oleh: {product.posted_by[0].nama} </p>
                  </div>
                </div>

                <div class="flex flex-col justify-center items-center flex-1">
                  <div class="self-stretch text-[var(--Primary, #545F71)] text-right font-poppins text-12 font-normal leading-[160%]"></div>
                </div>
              </div>
            </div>

            <div class="w-[300px] h-[237px] rounded-[5px]">
              <img
                src={`http://localhost:5000/api/getImage/${product.id}`}
                alt="Foto"
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
        ;
      </div>

      <Footer />
    </div>
  );
};


export default ListProduct;

