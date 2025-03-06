// import React from 'react';
import HomeStructure from "./Home/HomeStructure";
// import Bnavegacion from "./BarraNavegacion/Components/Bnavegacion"
import Search from "./BarraNavegacion/Components/Search";
import './Structure.less';
import Explore from "./Explore/components/Explore";
import Reels from "./Reel/components/Reels";
import Message from "./Message/components/Message";
import Modal_threePoint from "./Home/components/Modal_threePoint";


export default function Structure() {
  return (
    <section className="Structure">
        <Search/>
        <Modal_threePoint/>
        <HomeStructure/>
        <Explore/>
        <Reels/>
        <Message/>
    </section>
  )
};
