import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();
  return (
    <div class="flex justify-center items-center w-screen md:h-screen pt-[5px] pb-[50px] bg-[#71825E] mt-[200px]">
      <div class="flex flex-col items-center justify-between w-screen h-[550px] p-[30px] flex-shrink-[0px]">
        <div class="flex flex-col md:flex-row px-[100px] justify-between items-center self-stretch">
          <div class="flex flex-col items-start gap-[30px] md:gap-[40px]">
            <p class="text-white font-dm-sans text-[20px] md:text-[25px] font-bold">
              Explore our pages
            </p>
            <div class="flex flex-col items-start gap-[10px] md:gap-[20px]">

              <button class="flex items-center w-[190px] h-[35px] p-[6px] gap-[10px] rounded-[5px]  hover:rounded-[7px] hover:p-[10px] hover:bg-[#47523A] hover:scale-110 duration-150">
                <div class="flex justify-center items-center">
                  <p class="text-white font-dmsans text-[20px] font-bold">
                    Dashboard
                  </p>
                </div>
              </button>

              <button onClick={() => navigate("/product")} class="flex items-center w-[190px] h-[35px] p-[6px] gap-[10px] rounded-[5px]  hover:rounded-[7px] hover:p-[10px] hover:bg-[#47523A] hover:scale-110 duration-150">
                <div class="flex justify-center items-center">
                  <p class="text-white font-dmsans text-[20px] font-bold">
                   Activity
                  </p>
                </div>
              </button>

              <button  onClick={() => navigate("/leaderboard")} class="flex items-center w-[190px] h-[35px] p-[6px] gap-[10px] rounded-[5px]  hover:rounded-[7px] hover:p-[10px] hover:bg-[#47523A] hover:scale-110 duration-150">
                <div class="flex justify-center items-center">
                  <p class="text-white font-dmsans text-[20px] font-bold">
                    Leaderboard
                  </p>
                </div>
              </button>

              <button onClick={() => navigate("/aboutus")} class="flex items-center w-[190px] h-[35px] p-[6px] gap-[10px] rounded-[5px]  hover:rounded-[7px] hover:p-[10px] hover:bg-[#47523A] hover:scale-110 duration-150">
                <div class="flex justify-center items-center">
                  <p class="text-white font-dmsans text-[20px] font-bold">
                    About Us
                  </p>
                </div>
              </button>

            </div>
          </div>

          <div class="flex flex-col items-start gap-[25px]">
            <p class="text-white font-dm-sans text-[25px] font-bold">
              Our location
            </p>
            <div class="flex flex-col items-start gap-[15px]">
              <p class="w-[500px] text-white font-dm-sans text-[15px] font-medium leading-normal">
                Fakultas Ilmu Komputer UI, Pondok Cina, Kecamatan Beji, Kota
                Depok, Jawa Barat 16424
              </p>
              <div class="w-[400px] h-[240px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.2755452997044!2d106.82832601455115!3d-6.3647356464256095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec19e8d4161f%3A0x5e251c64fd454f5d!2sGedung%20A%20FASILKOM%20UI!5e0!3m2!1sen!2sid!4v1693591137174!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row py-[20px] px-[50px] justify-between items-center self-stretch">
          <div class="flex items-center gap-[50px]">
            <div class="w-[90px] h-[60px]">
              <img src="/assets/LogoSmall.svg" alt="Logo" />
            </div>
            <div class="flex flex-col items-start gap-[5px]">
              <div class="text-white font-dm-sans text-[18px] font-normal">
                Copyright
              </div>
              <div class="w-[550px]">
                <div class="text-white font-dm-sans text-[20px] font-normal">
                  ©2023 Tiba-tiba ngoding. Some rights reserved.
                </div>
                <div class="text-white font-dm-sans text-[16px] font-normal">
                  The creation of this website serves the purpose of
                  participating in the 2023 Web Development Informatics
                  Engineering Competition hosted by Universitas Negeri Jakarta.
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-[10px]">
            <div class="text-white font-dm-sans text-[18px] font-medium">
              Let’s connect with us!
            </div>
            <div class="flex flex-col items-start gap-[10px]">
              <div class="flex items-center gap-[15px]">
                <div class="flex flex-col items-start justify-center w-[190px] h-[30px]">
                  <p class="text-white font-dm-sans text-[19px] font-medium leading-normal">
                    Abby Marvel
                  </p>
                </div>

                <div class="flex items-start gap-[25px]">
                <a
                    href="https://www.instagram.com/abbymarvel/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/Instagram.svg"
                      alt="Instagram"
                      class="w-[24px] h-[24px]"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abbymarvel/?originalSubdomain=id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/Linkedin.svg"
                      alt="Linkedin"
                      class="w-[24px] h-[24px]"
                    />
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-[15px]">
                <div class="flex flex-col items-start justify-center w-[190px] h-[30px]">
                  <p class="text-white font-dm-sans text-[19px] font-medium leading-normal">
                    Ammar Ash Shiddiq
                  </p>
                </div>

                <div class="flex items-start gap-[25px]">
                  <a
                    href="https://www.instagram.com/ammarshddq/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/Instagram.svg"
                      alt="Instagram"
                      class="w-[24px] h-[24px]"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ammar-ash-shiddiq-b0b00a212/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/Linkedin.svg"
                      alt="Linkedin"
                      class="w-[24px] h-[24px]"
                    />
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-[15px]">
                <div class="flex flex-col items-start justify-center w-[190px] h-[30px]">
                  <p class="text-white font-dm-sans text-[19px] font-medium leading-normal">
                    Syarifah Nur Amalia
                  </p>
                </div>

                <div class="flex items-start gap-[25px]">
                <a
                    href="https://instagram.com/ichasnaa?igshid=YTQwZjQ0NmI0OA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/Instagram.svg"
                      alt="Instagram"
                      class="w-[24px] h-[24px]"
                    />
                  </a>
                   <a
                    href="https://www.linkedin.com/in/syarifah-nur-amalia-85a438219/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/Linkedin.svg"
                      alt="Linkedin"
                      class="w-[24px] h-[24px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
