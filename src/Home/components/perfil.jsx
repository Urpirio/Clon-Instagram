// import React from 'react';
import FotoPerfil from '../img/Fotoperfil.png';
import '../style/Perfil.less';


export default function Perfil() {
  return (
    <div className="ContainerPerfil">
        <div className="ContainerPerfil__div1">
            <div className='PerfilName'>
                <span className='Span1'>
                    <img src={FotoPerfil} alt="usuario foto" />
                </span>
                <span className='Span2'>
                    <h3 className='H3_1'>username</h3>
                    <h3 className='H3_2'>Real name in live</h3>
                </span>
                
            </div>
            <div className='SwitchAccount'>
                <span>Switch</span>
            </div>
            
        </div>
        <div className="ContainerPerfil__div2">
            <div className='ContainerPerfil__div2_div1'>
                <span className='Span1'>Suggested for you</span>
                <span className='Span2'>See all</span>
            </div>
            <div className='ContainerPerfil__div2_div2'>

            </div>
        </div>

    </div>
  )
}
