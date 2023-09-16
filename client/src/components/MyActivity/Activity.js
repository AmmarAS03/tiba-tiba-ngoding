import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Product from "../Product";

function Activity() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //get all products
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

  const delProgram = async (id) => {
    await fetch(`http://localhost:5371/programs/del-program/${id}`, {
      method: "DELETE"
    });
    navigate('/dashboard');
  }

  useEffect(() => {
    getMadeProducts();
  }, []);

  return (
    <div className="flex flex-col items-center gap-[30px] flex-1 bg-[#FFF] mt-[100px]"
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

      <div class="flex flex-wrap items-center gap-[20px]"
        style={{
          paddingLeft: "100px",
          paddingRight: "50px",
        }}
      >
        {products
          .map(product => (
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
                  <Link to={`/del-program/${product.id}`} key={product.id}>
                    <img src="assets/SeeList.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                  </Link>
                  <Link to={`/editprogram/${product.id}`} key={product.id}>
                    <img src="assets/Edit.svg" alt="Your Image" class="w-[18px] h-[20px]" />
                  </Link>
                  <img src="assets/Trash.svg" alt="Your Image" onClick={() => delProgram(product.id)} class="w-[18px] h-[20px]" />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Activity;
