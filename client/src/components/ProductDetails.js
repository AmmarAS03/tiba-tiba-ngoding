import React from "react";
import Navbar from "./UI/Commons/Navbar";
import Details from "./ProductDetails/Details";
import UpperNav from "./UI/Commons/UpperNav";

function ProductDetails() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
      <UpperNav/>
      <Details/>
    </div>
  );
}

export default ProductDetails;
