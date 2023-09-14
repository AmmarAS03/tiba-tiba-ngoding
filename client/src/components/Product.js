import React from 'react';
import Navbar from './UI/Commons/Navbar';
import ListProduct from './Product/ListProduct';


function Product() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
        <Navbar/>
        <ListProduct/>

    </div>

  )
}

export default Product