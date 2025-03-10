import DataContents from "../../../Data/DataContents";
// export let UserLeavE;
const ModalperfilLeave = (UserLeave) => {
    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray ; x++){
        if(UserLeave == DataContents[x].Number){
            if(DataContents[x].BoleanoModalPerfil === true){
                // DataContents[x].BoleanoModalPerfil = false;
                // UserLeavE = UserLeave;
                document.querySelector(`.${DataContents[x].ClassModalPR}`).style.display = 'none';
                
            }else{

            }
        }else{
            continue;
        }
    }
};
export default ModalperfilLeave;