import DataContents from "../../../Home/Data/DataContents";

const Ventana4 = () => {//Messages
    for(let x = 1 ; x < 5; x++){
        if( x == 4){
            document.querySelector(`.V${x}`).style.display = 'flex';
        }else{
            document.querySelector(`.V${x}`).style.display = 'none';
        }
        
    };
    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
         DataContents[x].BoleanoGotopost = false;
    };
};
export default Ventana4