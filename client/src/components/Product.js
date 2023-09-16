import React from 'react';
import Navbar from './UI/Commons/Navbar';
import ListProduct from './Product/ListProduct';
import UpperNav from './UI/Commons/UpperNav';


function Product() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
        <UpperNav/>
        <ListProduct/>
    </div>

  )
}

export default Product