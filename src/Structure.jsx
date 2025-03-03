// import React from 'react';
import HomeStructure from "./Home/HomeStructure";
// import Bnavegacion from "./BarraNavegacion/Components/Bnavegacion"
import Search from "./BarraNavegacion/Components/Search";
import './Structure.less';


export default function Structure() {
  return (
    <section className="Structure">
        <Search/>
        <HomeStructure/>
    </section>
  )
};
