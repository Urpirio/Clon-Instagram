import RestarMenu from "./RestarMenu";
import { UserClickG } from "./GotoPost";


export let UserClick;
let Show;
const ModalThree = (UserClickN) => {
    UserClick = UserClickN;
    if(UserClick == undefined){
        UserClick = UserClickG;
    };

    if(Show == undefined){
        document.querySelector('.Modal_ThreeP').style.display = 'flex';
        Show = false;
    }else if(Show == true){
        document.querySelector('.Modal_ThreeP').style.display = 'flex';
        Show = false;   
    }else{
        document.querySelector('.Modal_ThreeP').style.display = 'none';
        Show = true;
    };
    RestarMenu();
};
export default ModalThree;