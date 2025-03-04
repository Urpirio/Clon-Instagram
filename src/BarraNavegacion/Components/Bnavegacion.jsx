import React from 'react';
// import { Component, useEffect } from 'react';
// import { flushSync } from 'react-dom';
import { useState } from 'react';
import '../Style/Bnavegacion.less'
import DataBtn from '../Data/DataBtn';
import LogoInstagram from '../img/LogoInstagram.png';
import FotoPerfil from '../img/Fotoperfil.png';


export default function Bnavegacion() {

    const [ShowSearch, SetshowSearch] = useState(true);

    const ventana0 = () => {//Home
       for(let x = 1 ; x < 5; x++){
        if( x == 1){
            document.querySelector(`.V${x}`).style.display = 'flex';
        }else{
            document.querySelector(`.V${x}`).style.display = 'none';
        }
        
       };
    };
    const ventana1 = () => {//search

        SetshowSearch(!ShowSearch);
        ShowSearch ? document.querySelector('.Search__div').style.display = 'flex' :
        document.querySelector('.Search__div').style.display = 'none';

    };
    const ventana2 = () => {//explore
        for(let x = 1 ; x < 5; x++){
            if( x == 2){
                document.querySelector(`.V${x}`).style.display = 'flex';
            }else{
                document.querySelector(`.V${x}`).style.display = 'none';
            }
         };
    };
    const ventana3 = () => {//Reels
        for(let x = 1 ; x < 5; x++){
            if( x == 3){
                document.querySelector(`.V${x}`).style.display = 'flex';
            }else{
                document.querySelector(`.V${x}`).style.display = 'none';
            }
            
           };
    };
    const ventana4 = () => {//Messages
        for(let x = 1 ; x < 5; x++){
            if( x == 4){
                document.querySelector(`.V${x}`).style.display = 'flex';
            }else{
                document.querySelector(`.V${x}`).style.display = 'none';
            }
            
           };
    };
    const ventana5 = () => {//Notifications
        
    };
    const ventana6 = () => {//Create
        
    };
    const ventana7 = () => {//Dashboard

    };


  return (
    <section className='Bnavegacion'>
        <div className='Bnavegacion__div1'>
            <img  src={LogoInstagram} alt="Logo Instagram" />
        </div>
        <div className='Navegacion' id='Navegacion'>
            <span onClick={ventana0} className="ventana0">{/*Home*/}
                <i className='bx bxs-home' ></i>
                <span>{DataBtn[0].Vname}</span>
            </span>
            <span onClick={ventana1}  className="ventana1">{/*Search*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>
                <span>{DataBtn[1].Vname}</span>
            </span>
            <span onClick={ventana2} className="ventana2">{/*Explore*/}
                <i className='bx bx-compass'></i>
                <span>{DataBtn[2].Vname}</span>
            </span>
            <span onClick={ventana3} className="ventana3">{/*Reels*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16"><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>
                <span>{DataBtn[3].Vname}</span>
            </span>
            <span onClick={ventana4} className="ventana4">{/*Messages*/}
                <i className='bx bxl-messenger'></i>
                <span>{DataBtn[4].Vname}</span>
            </span>
            <span onClick={ventana5} className="ventana5">{/*Notifications*/}
                <i className='bx bx-heart'></i>
                <span>{DataBtn[5].Vname}</span>
            </span>
            <span onClick={ventana6} className="ventana6">{/*Create*/}
                <i className='bx bx-plus'></i>
                <span>{DataBtn[6].Vname}</span>
            </span>
            <span onClick={ventana7} className="ventana7">{/*Dashboard*/}
                <i className='bx bx-bar-chart-alt-2'></i>
                <span>{DataBtn[7].Vname}</span>
            </span>
            <span className="ventana8">
                <img src={FotoPerfil} alt="Ft usuario" />
                <span>Profile</span>
            </span>

        </div>
        <div className='Bnavegacion__div2'>
            {/* <span>
                <img src={FotoPerfil} alt="Ft usuario" />
                <span>Profile</span>
            </span> */}
            <span>
                <i className='bx bx-menu' ></i>
                <span>More</span>
            </span>
        </div>

    </section>
  )
}



    // useEffect(() => {
        
    // });

    // flushSync(()=>{
    //     const LargoArray = DataBtn.length;
    //     for(let x = 0; x <= LargoArray ; x++){
    //         let span = document.createElement('span');
    //         span.innerHTML = `${DataBtn[x].Icon} <span>${DataBtn[x].Vname}</span>`;
    //         span.id = `Ventana${x}`;
    //         document.getElementById('Navegacion').innerHTML = '<h1></h1>';


    //     };
    // })
