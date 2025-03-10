import { UserClick } from "./Modalthree";
import DataContents from "../../Data/DataContents";
import ModalThree from "./Modalthree";

// export let GoToPost_Active;
export let UserClickG;

const GotoPost = () => {
    document.querySelector('.Modal_ThreeP').style.display = 'none';
    document.querySelector('.V1').style.display = 'none';
    document.querySelector('.V5').style.display = 'flex';
    const LargoArray = DataContents.length;
    const PublicationContainer = document.querySelector('.PublicationContainer');
    PublicationContainer.innerHTML = '';

    for(let x = 0; x < LargoArray; x++){
        if(UserClick == DataContents[x].Number){
            let DivImg = document.createElement('div'); //contenedor de la imagen publicada.
            DivImg.className = 'DivImg';
            let Img = document.createElement('img');
            Img.src = DataContents[x].Publicacion;
            DivImg.append(Img);

            let DivInfo = document.createElement('div');
            DivInfo.className = 'DivInfo';

            let SpanH = document.createElement('span');
            SpanH.className = 'SpanH';
            let GSpanH = document.createElement('span');
            GSpanH.className = 'GSpanH'

            let SpanPerfil = document.createElement('span');//contenedor de la foto de perfil.
            SpanPerfil.className = 'SpanPerfil';
            let perfilImg = document.createElement('img');
            perfilImg.className = 'perfilImg';
            perfilImg.src = DataContents[x].FotoPerfil;
            SpanPerfil.append(perfilImg);

            let UserName = document.createElement('h3');//nombre de usuario.
            UserName.className = 'UserName';
            UserName.innerText = DataContents[x].UserName;

            let SpanThreeP = document.createElement('span');
            SpanThreeP.className = 'SpanThreeP';
            SpanThreeP.innerHTML = '<i>...</i>';
            SpanThreeP.addEventListener('click',()=>{
                DataContents[x].BoleanoGotopost = true;
                UserClickG = DataContents[x].Number;
                ModalThree();
            });

            let Spanf = document.createElement('span');
            Spanf.className = 'Spanf';
            Spanf.innerText = 'Following';
            Spanf.addEventListener('click',()=>{

            });

            SpanH.append(SpanPerfil,UserName,Spanf);
            GSpanH.append(SpanH,SpanThreeP);
            DivInfo.append(GSpanH);

            let divG = document.createElement('div');
            divG.className = 'divG';
            divG.append(DivImg,DivInfo);

            PublicationContainer.append(divG)

          







        }
    }
    
};
export default GotoPost;