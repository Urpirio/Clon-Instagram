import DataModalThree from "../../Data/DataModalThree";
import ModalThree from "./Modalthree";
import Copy_link from "./Copy_Link";


const Shareto = () => {
    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
    Modal_ThreeP_div1.innerHTML = '';

    const Spanh = document.createElement('span');
    Spanh.innerHTML = `<span>Share to...</span>`;
    Spanh.className = 'GSpan';
    Spanh.style.color = 'black';
    Spanh.style.height = '0.6cm';
    Spanh.style.justifyContent = 'space-around';
    Spanh.style.gap = '200px';

    const Icon = document.createElement('i');
    Icon.className = 'bx bx-x';
    Icon.style.fontSize = '25px';
    Icon.style.fontWeight = '600';
    Icon.style.cursor = 'pointer';
    Icon.addEventListener('click',ModalThree);

    Spanh.append(Icon);
    Modal_ThreeP_div1.append(Spanh);

    const LargoArray = DataModalThree[0].ShareTo.length;
    for(let x = 0; x < LargoArray ; x++){
        if(DataModalThree[0].ShareTo[x].TypeShareTo == 'QR code' ){//QR code
            let span = document.createElement('span');
            // span.href = ``;
            span.className = 'GSpan';
            span.innerHTML = `${DataModalThree[0].ShareTo[x].Icon} ${DataModalThree[0].ShareTo[x].TypeShareTo}`;

            span.addEventListener('click', ()=>{

                Modal_ThreeP_div1.innerHTML = '';

                let Span = document.createElement('span');
                Span.className = 'GSpan';
                Span.innerText = 'Esta funcion aun no esta disponible';

                let divbtn = document.createElement('div');
                divbtn.className = 'divbtn';

                let BtnOk = document.createElement('button');
                BtnOk.innerText = 'Close';
                BtnOk.addEventListener('click',ModalThree);

                divbtn.append(BtnOk)
                Modal_ThreeP_div1.append(Span,divbtn);
            });

            Modal_ThreeP_div1.append(span);

        }else if(DataModalThree[0].ShareTo[x].TypeShareTo == 'Copy link'){//Copy link
            let span = document.createElement('a');
            span.className = 'GSpan';
            span.innerHTML = `${DataModalThree[0].ShareTo[x].Icon} ${DataModalThree[0].ShareTo[x].TypeShareTo}`;
            
            span.addEventListener('click',Copy_link);
            
            
            
            Modal_ThreeP_div1.append(span);

        }else{
            let link = document.createElement('a');
            link.href = ``;
            link.className = 'GSpan';
            link.innerHTML = `${DataModalThree[0].ShareTo[x].Icon} ${DataModalThree[0].ShareTo[x].TypeShareTo}`;
            Modal_ThreeP_div1.append(link);
        }
    };
};
export default Shareto;

