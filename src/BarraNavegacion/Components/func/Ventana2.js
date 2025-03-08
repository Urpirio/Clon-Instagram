import DataContents from "../../../Home/Data/DataContents";

const Ventana2 = () => {//explore
    for(let x = 1 ; x < 5; x++){
        if( x == 2){
            document.querySelector(`.V${x}`).style.display = 'flex';
        }else{
            document.querySelector(`.V${x}`).style.display = 'none';
        }
     };
     const LargoArray = DataContents.length;
     for(let x = 0; x < LargoArray; x++){
     DataContents[x].BoleanoG = false;}
};
export default Ventana2;