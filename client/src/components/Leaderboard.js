import React from 'react'
import Board from './Leaderboard/Board';
import Navbar from './UI/Commons/Navbar';
import Head from './Leaderboard/Head';

function Leaderboard() {
  return (
    <div class="flex w-screen h-screen justify-between items-start bg-white">
    <Navbar/>
    <Head/>

    </div>


  )
}

export default Leaderboard