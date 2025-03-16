import React from 'react';
import ModalStory from './func/ModalStory';

export default function Storys(props) {

    const ShowStory = () => {
        ModalStory(props.ID)
    };

  return (
    <div onClick={ShowStory} className='C_Storys'>
        <span className='spanBackground'>
            <img src={props.img} alt={props.name} />
        </span>
        <span className='spanName'>{props.name}</span>
    </div>
  )
}
