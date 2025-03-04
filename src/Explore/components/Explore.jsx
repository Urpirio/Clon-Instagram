import React from 'react';
import '../style/Explore.less';
import DataExplore from '../Data/DataExplore';

export default function Explore() {



    const ContentExplore = (props) =>{
        return(
            <div className='ExploreContainer__div1'>
                <div className='EC_dv1_dv1'>
                    <div className='div1'>
                        <div>
                            <img src={props.img1} alt="" />
                        </div>
                        <div>
                            <img src={props.img2} alt="" />
                        </div>
                    </div>
                    <div className='div2'>
                        <div>
                            <img src={props.img3} alt="" />
                        </div>
                        <div>
                            <img src={props.img4} alt="" />
                        </div>
                    </div>
                </div>
                <div className='EC_dv1_dv2'>
                    <video src={props.video1} ></video>
                </div>
            </div>
        )
    };

    const Explorelist = DataExplore.map( DE => {
        return(
            <ContentExplore 
            img1 = {DE.Img1}
            img2 = {DE.Img2}
            img3 = {DE.Img3}
            img4 = {DE.Img4}
            video1 = {DE.video1}
            />
        )
    })

  return (
    <section className='ExploreContainer V2'>
        {Explorelist}
    </section>
  )
}
