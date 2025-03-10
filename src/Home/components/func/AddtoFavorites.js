// import ModalThree from "./ModalThree";
import ModalThree from "./Modalthree";
import DataContents from "../../Data/DataContents";
import { UserClick } from "./Modalthree";

const Add_to_Favorites = () => {
    const LargoArray = DataContents.length;
    for(let x = 0 ; x < LargoArray; x++){
        if(UserClick ==  DataContents[x].Number){
           if(DataContents[x].BoleanoFavorito != true){
                DataContents[x].BoleanoFavorito = true;
                let Icon = document.createElement('i');
                Icon.className = 'bx bxs-star';
                let DC = document.querySelector(`.${DataContents[x].classNameF}`);
                DC.append(Icon);
            
           }else{
                DataContents[x].BoleanoFavorito = false;
                let DC = document.querySelector(`.${DataContents[x].classNameF}`);
                DC.innerHTML = '';
           }
        }else{
            continue;
        }
    }
    ModalThree()
};
export default Add_to_Favorites;