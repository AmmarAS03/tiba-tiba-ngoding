import React from "react";
import Introduction from "./AboutUs/introduction";
import OurMission from "./AboutUs/ourmission";
import JoinUs from "./AboutUs/joinus";
import Ourvalues from "./AboutUs/ourvalues";
import UpperNav from "./UI/Commons/UpperNav";
import Footer from "./UI/Commons/Footer";

function AboutUs() {
  return (
    <div class="flex w-screen h-screen items-start">
      <UpperNav />
      <div
        class="flex p-[30px] md:p-[0px] md:pt-[100px] flex-col w-full flex-shrink-0 items-center gap-[25px] md:gap-[50px]"
      >
        <Introduction />
        <OurMission />
        <JoinUs />
        <Ourvalues />
      </div>
    </div>
  );
}

export default AboutUs;
