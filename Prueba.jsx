import React from 'react';


export default function Prueba() {
  
    let FOTO;

    const Prueba = async () => {
        // const Conexion = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        // const Data = await Conexion.json();
        // console.log(Data.species.name + ' ' + Data.species.url)
        // const largoArray = Data.abilities.length;
        // for(let x = 0; x < largoArray; x++){
        //     console.log(Data.abilities[x].ability.name);
        // };

        // const Conexion2 = await fetch(Data.species.url);
        // const Data2 = await Conexion2.json();
        // console.log(Data2.color.name);

        fetch('https://me-qr.com/api/countries/',{
            method: 'POST',
            headers: {'content-Type' : 'application/json'},
            body: JSON.stringify({results: 'Funciona'})
        }).then(
            repuesta => repuesta.json()
        ).then(
            (Data) => {
                console.log('datos enviados',Data)
            }
        ).catch(
            (err)=>{
                console.log(err,'NO se Enviaron los datos')
            }
        )
       

    };

    const Prueba2 = async () => {
        const conexion = await fetch('https://me-qr.com/api/countries/');
        const Data = await conexion.json();

        console.log(Data)

        // const largoArray = Data.results[0].datos.length;
        // for(let x = 0; x < largoArray; x++){
        //     let elments = document.getElementById('elments');
        //     elments.style.display = 'flex';
        //     elments.style.flexDirection = 'column';
        //     // console.log(Data.results[0].datos[x].name);
        //     let span  =document.createElement('span');
        //     span.innerText = Data.results[0].datos[x].name;
        //     elments.append(span)
        // };
    };


  return (
    <div>
        <input type="text" id='Input' />
        <img src={FOTO} alt="" title="" />
        <button onClick={Prueba}>CLik</button>
        <button onClick={Prueba2}>CLik 2</button>
        <div id='elments' ></div>
        
    </div>


  )
}
