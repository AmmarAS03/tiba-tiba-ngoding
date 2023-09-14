import React from "react";
import Navbar from "./UI/Commons/Navbar";
import Details from "./ProductDetails/Details";

function ProductDetails() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
      <Navbar />
      <Details/>
    </div>
  );
}

export default ProductDetails;
