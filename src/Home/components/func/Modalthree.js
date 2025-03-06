import RestarMenu from "./RestarMenu";


export let UserClick;
let Show;
const ModalThree = (UserClickN) => {
    UserClick = UserClickN;

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