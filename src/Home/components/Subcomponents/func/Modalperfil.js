import DataContents from "../../../Data/DataContents";

const ModalPerfil = (UserClick) => {
    const CC__div1_header = document.querySelector('.CC__div1_header');

    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
        if(UserClick == DataContents[x].Number){
            const DivHeader = document.createElement('div');

            const SpanBack = document.createElement('span');
            const SpanImg = document.createElement('img');

            const UserName = document.createElement('span');
            const LargeName = document.createElement('span');

            const DivStatsPerfil = document.createElement('div');

            




        }else{
            continue;
        }
    }
};
export default ModalPerfil;
