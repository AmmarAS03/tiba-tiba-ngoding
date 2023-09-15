import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function List() {
  const [isChecked, setIsChecked] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const { id } = useParams();

  const checkedBox = async(userid) => async(e) => {
    try {
      console.log(userid);
      setIsChecked(e.target.checked);
      if(isChecked){
        const response = await fetch(`http://localhost:5000/participants/addpoint/${userid}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const listVolunteers = async() => {
    try {
      const data = await fetch(`http://localhost:5000/participants/get-volunteers/${id}`);
      const dataJson = await data.json();
      setVolunteers(dataJson);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {      //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    listVolunteers();
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
        <div class="inline-flex flex-col items-center gap-[20px]">
          <p class="text-right text-black font-Poppins text-[24px] font-bold leading-[140%]">
            Daftar Relawan yang Mengikuti
          </p>
          <p class="text-right text-[#71825E] font-Poppins text-[32px] font-bold leading-[140%]">
            Membersihkan Danau Kenanga
          </p>
        </div>

        <div class="flex flex-col items-center gap-[15px]">
          {/* Tabel Mulai Dari bawah sini */}
          {volunteers.map(volunteer => (
            <div key={volunteer.userid} class="flex flex-col items-center w-[900px] h-[30px] px-[10px] gap-[5px] border border-solid border-black rounded-[10px] bg-[var(--Primary---White, #FFF)]">
            <div class="flex justify-between items-center self-stretch px-[20px]">
              <div class="flex flex-col justify-center items-start gap-[40px] flex-[1px]">
                <div class="flex justify-center items-center self-stretch">
                  <div class="flex-[1px]">
                    <p class="text-black font-Poppins text-[20px] font-bold leading-[140%]">
                      {volunteer.data.nama}
                    </p>
                  </div>
                  <div class="flex-[1px]">
                    <p class="text-[#545F71] font-Poppins text-[16px] font-semibold leading-[140%]">
                    {volunteer.data.lokasi}
                    </p>
                  </div>

                  <div class="flex-[1px]">
                    <p class="text-[#545F71] font-Poppins text-[16px] font-semibold leading-[140%]">
                    {volunteer.data.tanggal_program_mulai}
                    </p>
                  </div>

                  {/* <div
                  class="flex w-[1190px] h-[350px] p-[10px] flex-col justify-center items-center gap-[10px]"
                  style={{
                    background:
                      'url("assets/Anak.png") lightgray 50% / cover no-repeat',
                  }}
                ></div> */}
                  <input type="checkbox" value={isChecked} onChange={e => setIsChecked(true)}/>
                </div>
              </div>
            </div>
          </div>
          ))};
        </div>

        <button onClick={checkedBox} class="flex w-[90.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
          <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
}

export default List;
