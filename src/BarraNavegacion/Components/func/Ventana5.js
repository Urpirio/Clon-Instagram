import DataContents from "../../../Home/Data/DataContents";

const Ventana5 = () => {//Notifications
    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
         DataContents[x].BoleanoGotopost = false;
    }; 
};
export default Ventana5;