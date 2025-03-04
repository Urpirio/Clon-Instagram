import React from 'react';
import '../style/Reels.less';
// import video1 from '../video/video1.mp4';
// import Persona from '../img/fotosPerfil/persona.png';
import { useState } from 'react';
import DataReels from '../Data/DataReels';

export default function Reels() {

    

    const Reels = (props) => {

        const [Video , SetVideoOn] = useState(true)

        const Prueba = async () => {
             SetVideoOn(!Video)
            let video = document.getElementById(`${props.id}`);
            try{
                await video.play();
                document.querySelector(`.${props.className}`).style.display = 'none';
        
    
            }catch(err){
                alert(err)
            };
        };
        const Prueba2 = async () => {
            SetVideoOn(!Video);

            let video = document.getElementById(`${props.id}`);
            try{
                await video.pause();
                document.querySelector(`.${props.className}`).style.display = 'flex';
    
            }catch(err){
                alert(err)
                }
        }

        return(
    <div  className='ContainersReels_div1'>

        <div className='Div1'>
            <video id={props.id} onClick={Video ? Prueba : Prueba2}  src={props.Reel}></video>

            <div className='Div1_div'>
                <div onClick={Video ? Prueba : Prueba2}   className={`BtnPlay ${props.className}`}>
                    <button><i class='bx bx-play' ></i></button>
                </div>

                <div className='Div1_div_d1'>
                    <img src={props.Fotoperfil} alt="" />
                    <h2>{props.UserName}</h2>
                    <button>Follow</button>
                </div>

                <div className='Div1_div_d2'>
                    <p>{props.DescriptionReel}</p>
                </div>

                <div className='Div1_div_d3'>
                    <span className='Span1'>
                        <i class='bx bxs-music' ></i>
                        <p>{props.MusicName}</p>
                    </span>
                    <span className='Span2'>
                        <i class='bx bxs-map'></i>
                        <p>{props.LocationPublicacion}</p>
                    </span>
                </div>

            </div>
        </div>

        <div className='Div2'>
            <div className='Div2_dv1'>
                <i className='bx bx-heart' ></i>
                <span>{props.Likes}</span>
            </div>
            <div className='Div2_dv2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/></svg>
                <span>{props.Comments}</span>
            </div>
            <div className='Div2_dv3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>  
            </div>
            <div className='Div2_dv4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg>
            </div>
            <div className='Div2_dv5'>
                <span >...</span>
            </div>
        </div>

    </div>
    
)};


const ReelsList = DataReels.map( DR => {
    return(
        <Reels 
        Reel = {DR.Reel} 
        Fotoperfil = {DR.Fotoperfil}
        UserName = {DR.UserName}
        DescriptionReel = {DR.DescriptionReel}
        MusicName = {DR.MusicName}
        LocationPublicacion = {DR.LocationPublicacion}
        Likes = {DR.Likes}
        Comments = {DR.Comments}
        id = {DR.id}
        className = {DR.className}
        />
    )
})


  return (
   <section className='ContainersReels  V3'>
    {ReelsList}
   </section>
  )
}
