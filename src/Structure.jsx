import React from 'react';
import HomeStructure from "./Home/HomeStructure";
import Search from "./BarraNavegacion/Components/Search";
import './Structure.less';
import Explore from "./Explore/components/Explore";
import Reels from "./Reel/components/Reels";
import Message from "./Message/components/Message";
import Modal_threePoint from "./Home/components/Modal_threePoint";
import Publication from "./Home/components/Publication";
import ModalShare from "./Home/components/ModalShare";



export default function Structure() {
  return (
    <section className="Structure">
        <Search/>
        <Modal_threePoint/>
        <ModalShare/>
        <HomeStructure/>
        <Explore/>
        <Reels/>
        <Message/>
        <Publication/>  
    </section>
  )
};
