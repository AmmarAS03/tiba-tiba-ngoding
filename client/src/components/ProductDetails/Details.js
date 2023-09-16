import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [lokasi, setLokasi] = useState("");
  //const [waktu, setWaktu] = useState("");
  const [tanggal_program_mulai, setTanggal] = useState("");
  const [target_partisipan, setTarget] = useState("");
  const [linkwa, setLink] = useState("");
  const [posted_by, setPosted] = useState("");

  const navigate = useNavigate();

  //get details product
  const getDetails = async(e) => {
    try {
        const data = await fetch(`http://localhost:5371/programs/get-details-program/${id}`);
        const dataJson = await data.json();
        setTitle(dataJson[0].title);
        setDeskripsi(dataJson[0].deskripsi);
        setLokasi(dataJson[0].lokasi);
        //setWaktu(dataJson[0].waktu);
        setTanggal(dataJson[0].tanggal_program_mulai);
        setTarget(dataJson[0].target_partisipan);
        setLink(dataJson[0].linkWA);
        setPosted(dataJson[0].postedby_nama[0].nama);
    } catch (error) {
        console.error(error.message);
    }
  };

  const joinProgram = async() => {
    try {
      await fetch(`http://localhost:5371/participants/join-program/${id}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {      //untuk memanggil fungsi getProducts saat komponen "ListProduct" pertama kali di-render.
    getDetails();
},[]); //[], Anda memberitahu React bahwa efek ini hanya perlu dijalankan sekali saat komponen "ListProduct" pertama kali di-render.

  return (
    <div
      className="flex flex-col items-center gap-[64px] flex-1 bg-[#FFF]"
      style={{


        paddingTop: "180px",
       
      }}
    >
      <div class="flex flex-col items-center gap-[17px]">
        <h2 class="text-right text-[#71825E] font-poppins text-[40px] font-bold leading-[140%]">
          {title}
        </h2>
        <div class="flex flex-col items-center gap-[20px]">
          <div class="flex flex-col w-[835px] p-[30px] [10px] items-center gap-[0px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]">
            <div class="flex h-[390px] p-[0px] [47px] justify-between items-center self-stretch">
              <div class="w-[305px] h-[305px] rounded-5 bg-[url('<path-to-image>') lightgray] bg-center bg-cover bg-no-repeat">
              <img
                    src='assets/Trash.png'
                    alt="Trash"
                    className="w-full h-full rounded-[5px]"
                  />
              </div>
              <div class="flex flex-col w-[409px] h-[377px] justify-center items-start gap-[190px]">
                <div class="flex flex-col justify-center items-start gap-[78px]">
                  <div class="flex flex-col w-[409px] justify-center items-center">
                    <div class="flex flex-col w-[409px] h-[89px] justify-center items-center gap-[5px]">
                      <div class="self-stretch">
                        <p class="text-black font-poppins text-[24px] font-bold leading-[140%]">
                          {lokasi}
                        </p>
                      </div>
                      <div class="self-stretch">
                        <p class="text-[#305C7D] font-poppins text-20 font-bold leading-[140%]">
                          {tanggal_program_mulai}
                        </p>
                      </div>
                      <div class="self-stretch">
                        <p class="text-[var(--Primary, #545F71)] font-poppins text-[12px] font-bold leading-[140%]">
                          Target: {target_partisipan} relawan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col justify-center items-start gap-[81px]">
                    <div class="flex flex-col w-[409px] h-[38px] justify-center items-center">
                      <div class="h-[235px] flex-shrink-[0px] self-stretch">
                        <p class="text-[var(--Primary, #545F71)] font-poppins text-[11px] font-normal leading-[160%]">
                        {deskripsi}
                        </p>
                      </div>
                    </div>

                    <div class="flex w-[409px] items-center gap-[40px]">
                      <div class="flex flex-col justify-center items-center flex-[1px]">
                        <div class="self-stretch">
                          <p class="text-[var(--Primary, #545F71)] font-poppins text-[14px] font-normal leading-[160%]">
                            Diunggah oleh: {posted_by}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex w-[786px] items-center gap-[20px] pl-[10px]">
              <button onClick={joinProgram} class="flex w-[130px] h-[40px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
                <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                  Ikut Kegiatan
                </div>
              </button>


              
              <button class="flex w-[245px] h-[40px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#25D366]">
                <a
                href={linkwa}
                >
              <div class="flex items-center gap-[10px]">
                <div class="w-[151px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                  Join Group WhatsApp
                </div>
                <div class="w-[25px] h-[25px] bg-lightgray bg-center bg-cover bg-no-repeat">
                  <img
                    src="assets/WhatsApp.png"
                    alt="WhatsApp Icon"
                    class="w-full h-full"
                  />
                </div>
                </div>
                </a>
              </button>
        
            </div>
          </div>
        </div>
      </div>
      <ProductCards/>
    </div>
  );
}

export default Details;
