import React from 'react'
import Board from './Leaderboard/Board';
import Navbar from './UI/Commons/Navbar';
import Head from './Leaderboard/Head';
import UpperNav from './UI/Commons/UpperNav';

function Leaderboard() {
  return (
    <div class="flex flex-col w-screen h-screen justify-between items-start bg-white">
    <UpperNav/>
    <Head/>

    </div>


  )
}

export default Leaderboard