import DataBtnBoleano from "../../Data/DataBtnBoleano";
import DataContents from "../../../Home/Data/DataContents";

let ShowSearch;
const Ventana1 = () => {//search

    if(ShowSearch == undefined){
        document.querySelector('.Search__div').style.display = 'flex';
        ShowSearch = false;
    }else if(ShowSearch == true){
        document.querySelector('.Search__div').style.display = 'flex';
        ShowSearch = false;
    }else{
        document.querySelector('.Search__div').style.display = 'none';
        ShowSearch = true;
    };

    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
    DataContents[x].BoleanoG = false;
}
};
export default Ventana1;