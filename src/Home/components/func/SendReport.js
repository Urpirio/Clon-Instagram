import { IdentificadorReportes } from "./Report";
import { NuevaOpcion_SendReport } from "./Report";
import ModalThree from "./Modalthree";
import DataContents from "../../Data/DataContents";
import { UserClick } from "./Modalthree";

const SendReport = () => {//Envia los reportes que se hacen
    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
    Modal_ThreeP_div1.innerHTML = '';
    let divC =  document.createElement('div');
    divC.className = 'divC';
    let IconCheck = document.createElement('i');
    IconCheck.className = 'bx bx-check  IconCheck';
    let divM = document.createElement('div');

    switch(IdentificadorReportes){
        case 1:
                divM.className = 'divM'
                divM.innerHTML = `
                <h2>Thanks for your feedback</h2>
                <p class = 'LinkC'>
                    <a  herf = ''> Community Standards </a>
                </p>`;
                break;
        case 2:
                divM.className = 'divM';
                divM.innerHTML = `
                <h2>Thanks for your feedback</h2>
                <p>
                    You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
                </p>`;
                break;
        case 3:
            divM.className = 'divM';
            divM.innerHTML = `
            <h2>Thanks for reporting this post</h2>
            <p>
                You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
            </p>`;
            break;
        case 4:
            divM.className = 'divM';
            divM.innerHTML = `
            <h2>Thanks for reporting this post</h2>
            <p>
                You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
            </p>`;
            break;
        case 5:
            divM.className = 'divM';
            divM.innerHTML = `
            <h2>Thanks for reporting this post</h2>
            <p>
                You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
            </p>`;
            break;
        case 6:
            divM.className = 'divM';
            divM.innerHTML = `
            <h2>Thanks for reporting this post</h2>
            <p>
                You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
            </p>`;
            break;
        case 7:
            divM.className = 'divM';
            divM.innerHTML = `
            <h2>Thanks for reporting this post</h2>
            <p>
                You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
            </p>`;
            break;
        case 8:
            divM.className = 'divM';
            divM.innerHTML = `
            <h2>Thanks for reporting this post</h2>
            <p>
                You'll get a notification once we review your report. Thanks for helping us keep Instagram a safe and supportive community.
            </p>`;
            break;
        default:
            break;
    }
    

    divC.append(IconCheck,divM);
    Modal_ThreeP_div1.append(divC);

    const largoArray = DataContents.length;
    for(let x = 0; x< largoArray; x++){
        if(UserClick == DataContents[x].Number){
            if(NuevaOpcion_SendReport == true){
                for(let c = 1; c < 4 ; c++){
                    let span = document.createElement('span');
                    let Inspan = document.createElement('span');
           
                    if(c == 1){
                        span.innerHTML = `<span>Block ${DataContents[x].UserName}</span><i class = 'bx bx-chevron-right'></i>`
                        span.style.color = 'red';
                        span.style.gap = '210px';
                        span.className = `GSpan L${c}`;
                    }else if(c == 2){
                        span.innerHTML = `<span>Unfollow ${DataContents[x].UserName}</span><i class = 'bx bx-chevron-right'></i>`
                        span.className = `GSpan L${c}`;
                        span.style.gap = '185px';
                    }else{
                        Inspan.innerText = `Learn more about our Community Standards`;
                        Inspan.style.width = '8.6cm';
                        span.append(Inspan)
                        span.innerHTML += `<i class = 'bx bx-chevron-right'></i>`;
                        
                        span.className = `GSpan L${c}`;
                        span.style.justifyContent = 'center';
                        span.style.gap = '10px';
                    };
                
                    Modal_ThreeP_div1.append(span);
            };

            }else{
                for(let c = 1; c < 3 ; c++){
                    let span = document.createElement('span');
                    let Inspan = document.createElement('span');
           
                    if(c == 1){
                        span.innerHTML = `<span>Block ${DataContents[x].UserName}</span><i class = 'bx bx-chevron-right'></i>`
                        span.style.color = 'red';
                        span.style.gap = '210px';
                        span.className = `GSpan L${c}`;
                    }else{
                        Inspan.innerText = `Learn more about our Community Standards`;
                        Inspan.style.width = '8.6cm';
                        span.append(Inspan);
                        span.innerHTML += `<i class = 'bx bx-chevron-right'></i>`
                        span.className = `GSpan L${c}`;
                        span.style.justifyContent = 'center';
                        span.style.gap = '20px';
                    };
                
                Modal_ThreeP_div1.append(span);
            };
        }

    }};

    let divbtn = document.createElement('div');
    divbtn.className = 'divbtn';
    let btnclose = document.createElement('button');
    btnclose.innerText = 'Close';
    btnclose.addEventListener('click',ModalThree);
    divbtn.append(btnclose);
    Modal_ThreeP_div1.append(divbtn);
};
export default SendReport;