import DataContents from "../../../Data/DataContents";

const ModalPerfil = (UserClick) => {
    const CC__div1_header = document.querySelector('.CC__div1_header');

    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
        if(UserClick == DataContents[x].Number){
            const DivHeader = document.createElement('div');//contenedor superios Del modal

            const SpanBack = document.createElement('span');
            const SpanImg = document.createElement('img');//para las story y perfil

            const UserName = document.createElement('span');
            const LargeName = document.createElement('span');//para el Username y nombre completo

            const DivStatsPerfil = document.createElement('div');//para el apartado que muestra los seguidores y post

            const SpanPosts = document.createElement('span');
            const SpanFollowers = document.createElement('span');
            const SpanFollowing = document.createElement('span');//componente del apartado de arriva

            const divbtn = document.createElement('div');
            divbtn.className = 'divbtn';//contenedor de los botones follow y message.
            const btnMessage = document.createElement('span');
            const btnFollowStatus = document.createElement('span');




        }else{
            continue;
        }
    }
};
export default ModalPerfil;
