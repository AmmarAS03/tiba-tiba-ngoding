import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Router,
  json,
  Link,
} from "react-router-dom";
import Product from "../Product";
import Footer from "../UI/Commons/Footer";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Lihat Semua");
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  //get all products
  const getProducts = async () => {
    try {
      const data = await fetch("http://localhost:5371/programs/get-allprograms")
        .then((response) => response.json())
        .then((responseData) => {
          setProducts(responseData);
          console.log(responseData.foto);
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
    setSelectedLocation(option === "Lihat Semua" ? "" : option);
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
          class={`flex p-[10px] [20px] items-center gap-[30px] flex-[1px] rounded-[10px] bg-var(--Tertiary, #EEF1F4) shadow-md cursor-pointer ${isDropdownOpen ? "rounded-b-none" : ""
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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div class="relative inline-block">
          <div
            class={`flex w-[304px] h-[55px] p-[0px] [10px] justify-center items-center rounded-[10px] bg-[var(--Tertiary, #EEF1F4)] shadow-md cursor-pointer`}
            id="dropdownButton"
            onClick={toggleDropdown}
          >
            <div class="w-[258px] flex-shrink-[0px] text-black font-dmsans text-[20px] font-normal leading-normal">
              <span id="selectedLocation">{selectedOption}</span>
            </div>
            <img
              class={`w-[26px] h-[26px] flex-shrink-[0px] text-[#8E8E93] transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                }`}
              src="assets/Cheveron.svg"
              alt="Dropdown"
              id="dropdownIcon"
            />
          </div>

          {isDropdownOpen && (
            <div
              class="absolute top-[60px] left-[0px] z-[10px] w-[304px] bg-[var(--Tertiary, #EEF1F4)] shadow-md border-none outline-none bg-transparent rounded-b-[10px]"
              id="dropdownOptions "
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
              <div
                class=" py-[2px] px-[10px] hover:bg-[#71825E] hover:text-white cursor-pointer"
                onClick={() => selectOption("Lihat Semua")}
              >
                Lihat Semua
              </div>
            </div>
          )}
        </div>
      </div>
      <div class="flex items-center content-center lg:px-[100px] gap-[30px] flex-wrap">
        {products
          .filter(
            (product) =>
              product.title.toLowerCase().includes(searchInput.toLowerCase()) &&
              (selectedLocation === "" || product.lokasi === selectedLocation)
          )
          .map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div class="flex flex-col w-[247px] h-[322px] py-[20px] px-[15px] justify-between items-center flex-shrink-0 rounded-[10px] border-[0.3px] border-black bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <div class="flex flex-col justify-center items-center gap-[1px] self-stretch">
                  <div class="flex flex-col justify-center items-center gap-[10px] self-stretch">
                    <img class="h-[133px] w-auto self-stretch rounded-[5px]" src="assets/Sampah.png" alt="Your Image Description" />
                    <div class="flex flex-col justify-center items-center gap-[15px] self-stretch">
                      <div class="self-stretch text-[#71825E] font-Poppins text-[18px] font-bold leading-[140%]">
                        {product.title}
                      </div>
                      <div class="flex flex-col justify-center items-center self-stretch">
                        <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-semibold leading-[140%]">
                          {product.tanggal_program_mulai}                      </div>
                        <div class="self-stretch text-[#10436A] font-Poppins text-[12px] font-semibold leading-[140%]">
                          <p>{product.lokasi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center self-stretch px-[5px]">
                  <div class="flex flex-col w-full justify-center items-center flex-[1_1_0]">
                    <div class="self-stretch text-[#545F71] font-Poppins text-[12px] font-normal leading-[19.2px]">
                      Target Partisipan:
                    </div>
                  </div>
                  <div class="flex flex-col justify-center items-center flex-[1_1_0]">
                    <div class="self-stretch text-right text-[#545F71] font-Poppins text-[12px] font-normal leading-[19.2px]">
                      {product.target_partisipan}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default ListProduct;
