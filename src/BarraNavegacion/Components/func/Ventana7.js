import DataContents from "../../../Home/Data/DataContents";

const Ventana7 = () => {//Dashboard
    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
         DataContents[x].BoleanoGotopost = false;
    };
};
export default Ventana7;