import ModalThree from "./Modalthree";
import DataContents from "../../Data/DataContents";
import { UserClick } from "./Modalthree";

const Unfollow = () => {//Btn de Unfollow 
    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
    Modal_ThreeP_div1.innerHTML = '';

    const LargoArray = DataContents.length;
    for(let x = 0 ; x < LargoArray; x++){
        if(UserClick == DataContents[x].Number){
            let divUnfollow = document.createElement('div');
            divUnfollow.className = 'divUnfollow';
            divUnfollow.innerHTML = `<img src = '${DataContents[x].FotoPerfil}'/>
            <span>Unfollow @${DataContents[x].UserName}</span>`;
            Modal_ThreeP_div1.append(divUnfollow);

            for(let c = 1; c < 3 ; c++){
                let span = document.createElement('span');
                if(c == 1 ){/*button de unfollow8*/;
                    span.className = 'GSpan red';
                    span.innerText = 'Unfollow';
                    span.addEventListener('click',()=>{
                       document.querySelector(`.${DataContents[x].className}`).remove();
                       ModalThree();
                    });

                }else{/*button cancel*/;
                    span.className = 'GSpan bottom';
                    span.innerText = 'Cancel';
                    span.addEventListener('click',ModalThree);
                };
                span.style.fontSize = ''
                Modal_ThreeP_div1.append(span);
            }

        }else{
            continue;
        }
    }

};
export default Unfollow;