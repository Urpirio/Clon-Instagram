import DataContents from "../../../Data/DataContents";
import ModalThree from "../../func/Modalthree";



const ModalPerfil = async (UserOVER) => {
    const conexion = await fetch('https://randomapi.com/api/7c37714d346d367a06da78503e1c2317')
    const Data = await conexion.json();
    
    
    const LargoArray = DataContents.length;
    for(let x = 0; x < LargoArray; x++){
        
        if(UserOVER == DataContents[x].Number){

           if(DataContents[x].BoleanoModalPerfil === false){
            let Follow;
            const ClassModalP = document.querySelector(`.${DataContents[x].ClassModalP}`);
             //Header
             const DivHeader = document.createElement('div');
             DivHeader.className = 'DivHeader';
 
             const SpanBack = document.createElement('span');
             SpanBack.className = 'Span1';
             SpanBack.style.background = 'linear-gradient(red,orange,yellow)';
 
             const SpanImg = document.createElement('img');
             SpanImg. src = DataContents[x].FotoPerfil;
             SpanBack.append(SpanImg);
             
             const DivNames = document.createElement('div');
             DivNames.className = 'DivNames';
             const UserName = document.createElement('span');
             UserName.className = 'UserName';
             UserName.innerText = DataContents[x].UserName;
             const CompleteName = document.createElement('span');
             CompleteName.className = 'CompleteName';
             CompleteName.innerText = DataContents[x].CompleteName;
             DivNames.append(UserName,CompleteName);
 
             DivHeader.append(SpanBack,DivNames);
 
             //contenedor Stats
 
             const DivStatsPerfil = document.createElement('div');
             DivStatsPerfil.className = 'DivStatsPerfil';
 
             for(let x = 0 ; x < Data.results.length ; x++){
                const SpanPosts = document.createElement('span');
             SpanPosts.innerHTML = `<h4>${Data.results[x].GeneradorPublication}</h4><span>Posts</span>`;
             const SpanFollowers = document.createElement('span');
             SpanFollowers.innerHTML = `<h4>${Data.results[x].GeneradorFollows}</h4><span>Followers</span>`;
             const SpanFollowing = document.createElement('span');
             SpanFollowing.innerHTML = `<h4>${Data.results[x].GeneradorFollowing}</h4><span>Following</span>`;
             
             DivStatsPerfil.append(SpanPosts,SpanFollowers,SpanFollowing);
             }
             
             //Btns
             const divbtn = document.createElement('div');
             divbtn.className = 'divbtn';
             const btnMessage = document.createElement('button');
             btnMessage.innerHTML = `<i class='bx bxl-messenger'></i><span>Message</span>`;

             btnMessage.addEventListener('click',()=>{
               document.querySelector('.Modal_ThreeP').style.display = 'flex';
               const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
               Modal_ThreeP_div1.innerHTML = '';
           
               let Span = document.createElement('span');
               Span.className = 'GSpan';
               Span.innerText = 'Esta funcion aun no esta disponible';
           
               let divbtn = document.createElement('div');
               divbtn.className = 'divbtn';
           
               let BtnOk = document.createElement('button');
               BtnOk.innerText = 'Close';
               BtnOk.addEventListener('click',()=>{
                  ModalThree();
                  document.querySelector('.Modal_ThreeP').style.display = 'none';
               });
           
               divbtn.append(BtnOk)
               Modal_ThreeP_div1.append(Span,divbtn);
             });




             const btnFollowStatus = document.createElement('button');
             btnFollowStatus.innerText ='Following';
             btnFollowStatus.style.background = '#EFEFEF';
             btnFollowStatus.style.color = 'black';

             btnFollowStatus.addEventListener('click',()=>{
               if(DataContents[x].BoleanoFollow === true){
                  DataContents[x].BoleanoFollow = false;
                  btnFollowStatus.innerText ='Follow';
                  btnFollowStatus.style.background = '#0095F6';
                  btnFollowStatus.style.color = 'white';
               }else{
                  DataContents[x].BoleanoFollow = true;
                  btnFollowStatus.innerText = 'Following';
                  btnFollowStatus.style.background = '#EFEFEF';
                  btnFollowStatus.style.color = 'black';
               };
             });
             //hover 
             btnFollowStatus.addEventListener('mouseenter',()=>{
                if(DataContents[x].BoleanoFollow === true){
                 btnFollowStatus.style.opacity = '0.7';

               }else{
                  btnFollowStatus.style.background = '#1877F2';
               };
             });
             btnFollowStatus.addEventListener('mouseleave',()=>{
                if(DataContents[x].BoleanoFollow === true){
                  btnFollowStatus.style.opacity = `1`;
                }else{
                   btnFollowStatus.style.background = '#0095F6';
                };
             });

             divbtn.append(btnMessage,btnFollowStatus);//contenedor de botones.



             const Bdiv = document.createElement('div');
             Bdiv.className = `CC__div1_header_dv3 ${DataContents[x].ClassModalPR}`;
             Bdiv.addEventListener('mouseenter',()=>{
                document.querySelector(`.${DataContents[x].ClassModalPR}`).style.display = 'flex';
             });
             Bdiv.addEventListener('mouseleave',()=>{
                document.querySelector(`.${DataContents[x].ClassModalPR}`).style.display = 'None';
             })
             Bdiv.append(DivHeader,DivStatsPerfil,divbtn)
 
 
             ClassModalP.append(Bdiv);

             DataContents[x].BoleanoModalPerfil = true;
 
           }else{
                document.querySelector(`.${DataContents[x].ClassModalPR}`).style.display = 'flex';
           }
        }else{
            continue;
        }
    }
};
export default ModalPerfil;
