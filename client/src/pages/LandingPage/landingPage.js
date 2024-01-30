import React from "react";
import "../../assets/css/typography.css";
import "./LandingPage.css";
import DataBox from "../../components/DataBox/DataBox";
import LandingCardBox from "../../components/LandingCardBox/LandingCardBox";
import ExperienceBox from "../../components/ExperienceBox/ExperienceBox";
import LandingCardButton from "../../components/LandingCardButton/LandingCardButton";

import BannerImage from "../../assets/images/Banner.png";
import Kegiatan from "../../assets/images/Kegiatan.png";
import Relawan from "../../assets/images/Relawan.png";
import Points from "../../assets/images/Point.png";
import Faiz from "../../assets/images/Faiz.png";
import Humaira from "../../assets/images/Maira.png";
import Qissa from "../../assets/images/Carissa.png";
import Nadine from "../../assets/images/Nadine.png";

function LandingPage() {
  const data = [
    {
      image: Relawan,
      title: "Menjadi Relawan",
      description:
        "We are committed to protecting our planet for future generations. Sustainability is at the forefront of our environmental initiatives, from cleanups to conservation efforts.",
    },
    {
      image: Kegiatan,
      title: "Laporkan Kegiatan",
      description:
        "We cherish the sense of belonging and unity within our community. Together, we are more than the sum of our parts, and we value the relationships and connections that make us strong.",
    },
    {
      image: Points,
      title: "Raih Points",
      description:
        "We embody it in everything we do. Compassion is our guiding light, inspiring us to take action and make a meaningful difference in the lives of others.",
    },
  ];

  const dataKisah = [
    {
      image: Faiz,
      name: "Faizzarazak Fadhillah",
      description:
        "Suka banget sama komunitas yang dibangun sama GotongRuang. Thankzz GotongRuang...sukses terus yaa",
    },
    {
      image: Humaira,
      name: "Humaira Rinjani",
      description:
        "Jujur aku awalnya bukan orang yang suka kegiatan relawan gini, cuman temen-temen pada ngajakin aku dan sistem pointsnya itu loh yang bikin aku jadi rajin ikutan.",
    },
    {
      image: Qissa,
      name: "Carissa Almira",
      description:
        "Aplikasi ini mengubah segala-galanya! Dulu hanya mencoba karena ajakan teman, tapi sekarang waktu luangku jadi lebih berarti berkat Gotong Ruang.",
    },
    {
      image: Nadine,
      name: "Nadine Kezia",
      description:
        "Gotong Ruang mengubah cara saya melihat kegiatan relawan. Terima kasih, GotongRuang, atas pengalaman yang menginspirasi ini!",
    },
  ];

  return (
    <div>
      <section className="landing-first-section">
        <img src={BannerImage} className="background-image" alt="Banner" />
        <div className="page-title">
          <p className="h1 title-text">
            Satukan Langkah, Bangun Bersama untuk Bumi Kita
          </p>
        </div>
      </section>

      <section className="landing-second-section">
        <div className="data-box">
          <DataBox image={Relawan} number={1207} title={"Relawan"} />
          <DataBox image={Kegiatan} number={112} title={"Kegiatan"} />
        </div>

        <div className="moto-title">
          <p className="h4">Layanan Kami</p>
          <p className="p5">
            At Gotong Royong, our mission is to unite the hearts and hands of
            people from all walks of life, forging a powerful alliance dedicated
            to fostering positive change in our communities and beyond. We
            firmly believe that when compassionate hearts join skilled hands,
            they have the power to transform lives and create a better world.
          </p>
          <div className="card-box-container">
            {data.map((item, index) => (
              <LandingCardBox
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="landing-third-section">
        <div className="moto-title">
          <p className="h4">Lihat Kegiatan saat ini</p>
          <p className="p5">
            Jelajahi Ragam Kegiatan GotongRuang yang Inspiratif dan Bermakna
            untuk Bumi dan Komunitas Anda.
          </p>
        </div>
      </section>

      <section className="landing-fourth-section">
        <div className="moto-title">
          <p className="h4">Kisah Mereka:</p>
          <p className="h4">
            <span style={{ color: "#71825E" }}>Pengalaman</span> Positif Bersama{" "}
            <span style={{ color: "#71825E" }}>Gotong Ruang</span>
          </p>
        </div>
        <div className="experience-container">
          {dataKisah.map((item, index) => (
            <ExperienceBox
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="landing-fifth-section">
        <div className="landing-fifth-title">
          <p className="h4">
            Setelah membaca kisah inspiratif kami, sudah{" "}
            <span style={{ color: "#71825E" }}>siap</span> untuk{" "}
            <span style={{ color: "#71825E" }}>Bergabung?</span>
          </p>
        </div>

        <LandingCardButton text="Lihat Kegiatan Lainnya" link="/" />
        <div className="landing-fifth-title">
          <p className="h5">
            Ayo, jadilah bagian dari perubahan positif untuk{" "}
            <span style={{ color: "#71825E" }}>Bumi</span> dan komunitas.
            Bergabunglah dengan{" "}
            <span style={{ color: "#71825E" }}>GotongRuang</span> sekarang!{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
