import React from "react";
import Navbar from "./UI/Commons/Navbar";
import Introduction from "./AboutUs/introduction";
import OurMission from "./AboutUs/ourmission";
import JoinUs from "./AboutUs/joinus";
import Ourvalues from "./AboutUs/ourvalues";
import Footer from "./UI/Commons/Footer";

function AboutUs() {
  return (
    <div class="flex w-screen h-screen items-start">
      <Navbar />

      <div
        class="flex flex-col w-screen  flex-shrink-0 items-center gap-[75px]"
        style={{
          paddingLeft: "250px",
        }}
      >
        <Introduction />
        <OurMission />
        <JoinUs />
        <Ourvalues />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
