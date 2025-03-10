import DataContents from "../../../Home/Data/DataContents";

const Ventana0 = () => {//Home
    for(let x = 1 ; x < 6; x++){
     if( x == 1){
         document.querySelector(`.V${x}`).style.display = 'flex';
     }else{
         document.querySelector(`.V${x}`).style.display = 'none';
     }; 
    };

    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
         DataContents[x].BoleanoGotopost = false;
    };

 };
 export default Ventana0;