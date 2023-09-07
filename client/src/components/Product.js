import React from 'react';
import Navbar from './UI/Commons/Navbar';
import List from './Product/List';

function Product() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
        <Navbar/>
        <List/>
    </div>

  )
}

export default Product