// import React from 'react'
import Header from "./components/Header"
import Contents from "./components/Contents";
import Perfil from "./components/perfil";
import './HomeStructure.less'

export default function HomeStructure() {
  return (
   <section className="HomeStructure">
        <div className="HomeStructure__div1">
            <Header/>
            <Contents/>
        </div>
        <div className="HomeStructure__div2">
            <Perfil/>
        </div>
   </section>
  )
}
