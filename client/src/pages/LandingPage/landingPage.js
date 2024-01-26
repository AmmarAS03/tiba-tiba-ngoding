import React from "react";
import "../../assets/css/typography.css";
import "./LandingPage.css";
import BannerImage from "../../assets/images/Banner.png";
import DataBox from "../../components/DataBox/DataBox";
import Kegiatan from "../../assets/images/Kegiatan.png";
import Relawan from "../../assets/images/Relawan.png";

function LandingPage() {
  return (
    <div>
    <section className="first-section">
      <img src={BannerImage} className="background-image" alt="Banner" />
      <div className="page-title">
        <p className="h1 title-text">
          Satukan Langkah, Bangun Bersama untuk Bumi Kita
        </p>
      </div>
    </section>
    
    <section className="second-section">
      <div className="data-box">
        <DataBox image={Relawan} number={1207} title={"Relawan"} />
        <DataBox image={Kegiatan} number={112} title={"Kegiatan"} />
        
      </div>
      
      
      
    </section>



    </div>
  );
}

export default LandingPage;
