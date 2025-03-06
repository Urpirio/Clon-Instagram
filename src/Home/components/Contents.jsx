import React from 'react';
import '../style/Contents.less';
import DataContents from "../Data/DataContents";
import SubContents from './Subcomponents/SubContents';


export default function Contents() {


    const Datacontents = DataContents.map( DC => {
        return(
            <SubContents
            UserName = {DC.UserName} 
            Publicacion = {DC.Publicacion}
            Description = {DC.Description}
            Hour = {DC.Hour}
            FotoPerfil = {DC.FotoPerfil}
            Number = {DC.Number}
            className = {DC.className}
            classNameF =  {DC.classNameF}
            />
        )
    })



  return (
    <section className="Container_Contents">
        {Datacontents}
    </section>
  )
}
