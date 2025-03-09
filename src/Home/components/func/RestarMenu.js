import DataContents from "../../Data/DataContents";
import { UserClick } from "./Modalthree";
// import { GoToPost_Active } from "./GotoPost";
import Report from "./Report";
import Unfollow from "./Unfollow";
import Add_to_Favorites from "./AddtoFavorites";
import GotoPost from "./GotoPost";
import Shareto from "./ShareTo";
import Copy_link from "./Copy_Link";
import Embed from "./Embed";
import About_This_Account from "./About_This_Account";
import Cancel from "./Cancel";



const RestarMenu = () => {//Se encarga de volver todo a la normalidad despues de cerrar un proceso
    // document.querySelector('.Modal_ThreeP').style.display = 'none';
    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
    Modal_ThreeP_div1.innerHTML = '';
    // alert('funciona')
   

  
        for(let x = 1; x < 10; x++){
            if (x==1){
                let span1 = document.createElement('span');
                span1.className = `GSpan red top S1`;
                span1.innerText = 'Report';
                span1.addEventListener('click',()=>{
                    Report();
                });
                Modal_ThreeP_div1.append(span1);
                continue;
            }else if(x == 2){
                let span2 = document.createElement('span');
                span2.className = `GSpan S2`;
                span2.innerText = 'Unfollow';
                span2.addEventListener('click',()=>{
                    Unfollow();
                });
                Modal_ThreeP_div1.append(span2);
                continue;
                
            }else if(x == 3){
                const LargoArray = DataContents.length;
                for(let x = 0; x < LargoArray; x++){
                    if(UserClick == DataContents[x].Number){
                        let span3 = document.createElement('span');
                        span3.className = 'GSpan S3';
                        span3.innerText = `${DataContents[x].BoleanoF ? 'Remove from favorites' : 'Add to favorites'}`;
                        span3.addEventListener('click',()=>{
                        Add_to_Favorites();
                        });
                        Modal_ThreeP_div1.append(span3);
                    }else{
                        continue;
                    }
                }





                    
                continue;
            }else if(x == 4){
                const LargoArray = DataContents.length;
                for(let x = 0; x < LargoArray ; x++){
                   if(DataContents[x].Number == UserClick){
                    if(DataContents[x].BoleanoG != true){
                        let span4 = document.createElement('span');
                        span4.className = 'GSpan S4';
                        span4.innerText = 'Go to post';
                        span4.addEventListener('click',()=>{

                        // DataContents[x].BoleanoG = true;
                        GotoPost();
                        });
                        Modal_ThreeP_div1.append(span4);
                    }else{
                        continue;
                    };
                   };
                }
            }else if(x == 5){
                let span5 = document.createElement('span');
                span5.className = 'GSpan S5';
                span5.innerText = 'Share to...';
                span5.addEventListener('click',()=>{
                    Shareto();
                });
                Modal_ThreeP_div1.append(span5);
                continue;
            }else if(x == 6){
                let span6 = document.createElement('span');
                span6.className = 'GSpan S6';
                span6.innerText = 'Copy link';
                span6.addEventListener('click',()=>{
                    Copy_link();
                });
                Modal_ThreeP_div1.append(span6);
                continue;
            }else if(x == 7){
                let span7 = document.createElement('span');
                span7.className = 'GSpan S7';
                span7.innerText = 'Embed';
                span7.addEventListener('click',()=>{
                    Embed()
                });
                Modal_ThreeP_div1.append(span7);
                continue;
            }else if(x == 8){
                let span8 = document.createElement('span');
                span8.className = 'GSpan S8';
                span8.innerText = 'About this account';
                span8.addEventListener('click',()=>{
                    About_This_Account()
                });
                Modal_ThreeP_div1.append(span8);
                
                continue;
            }else if(x == 9){
                let span9 = document.createElement('span');
                span9.className = 'GSpan bottom S9';
                span9.innerText = 'Cancel';
                span9.addEventListener('click',()=>{
                    Cancel();
                });
                Modal_ThreeP_div1.append(span9);
                // alert('hola')
                continue;
            }else{

            }
        };

   
}

export default RestarMenu;