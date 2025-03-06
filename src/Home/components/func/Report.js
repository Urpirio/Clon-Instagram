import ModalThree from "./Modalthree";
import SendReport from "./SendReport";
import DataModalThree from "../../Data/DataModalThree";

export let NuevaOpcion_SendReport;
export let IdentificadorReportes;

const Report = () => {


    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
    Modal_ThreeP_div1.innerHTML = '';

    const S1 = document.createElement('span');
    S1.style.background = 'none';
    S1.style.color = 'black';
    S1.style.height = '0.6cm';
    S1.style.justifyContent = 'space-around';
    S1.style.gap = '200px';
    S1.style.cursor = 'default';
    S1.className = 'GSpan'
    S1.innerHTML = `<span>Report</span>`;

    let IconClose = document.createElement('i');
    IconClose.className = 'bx bx-x';
    IconClose.style.fontSize = '25px';
    IconClose.style.fontWeight = '600';
    IconClose.style.cursor = 'pointer';
    IconClose.addEventListener('click',ModalThree);

    S1.append(IconClose);
    Modal_ThreeP_div1.append(S1);
    
    
    
   



    let Question = document.createElement('h2');
    Question.innerText = 'Why are you reporting this post?'; 
    Question.style.fontSize = '16px';
    Question.className = 'QuestionR'
    Modal_ThreeP_div1.append(Question);

    const LargoArray = DataModalThree[0].Report[0].options.length;
    for(let x = 0 ; x < LargoArray; x++){
        let span = document.createElement('span');
        span.innerHTML = `<span>${DataModalThree[0].Report[0].options[x].Option}</span><i class='bx bx-chevron-right' ></i>`;
        span.className = `ReportSpan R${x}`;

        


        switch(x){// esto es para crear un monton de onclick con funciones totalmente diferentes y resultados distintios.
            case 0://Section de no me gusto.
                span.addEventListener('click',()=>{
                    S1.remove();
                    Question.remove();
                    NuevaOpcion_SendReport = false;
                    IdentificadorReportes = 1;
                    SendReport();
                });
                
                break;
            case 1://Section de bulling.
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = ''
                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';
                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H);

                    const largoArray = DataModalThree[0].Report[0].Results[0].bullying.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = false;
                            IdentificadorReportes = 2;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';

                        if( x == 2){
                            span.className = 'GSpan bottom';
                        }else{
                            span.className = 'GSpan';
                        }
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].bullying[x].TypeBullying}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = false;
                        IdentificadorReportes = 2;
                        SendReport()
                    });

                    
                    

                });
                break;
            case 2://section suicide
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = '';

                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';

                    let Question = document.createElement('h2');
                    Question.innerText = 'What kind of self-harm?'; 
                    Question.style.fontSize = '16px';
                    Question.className = 'QuestionR'


                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H,Question);

                    const largoArray = DataModalThree[0].Report[0].Results[0].SuicideP.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = false;
                            IdentificadorReportes = 3;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';
                        span.className = 'GSpan';
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].SuicideP[x].TypeSuicide}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = false;
                        IdentificadorReportes = 3;
                        SendReport()
                    });
                });
                break;
            case 3://section violence
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = '';

                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';

                    let Question = document.createElement('h2');
                    Question.innerText = 'How is it violence, hate or exploitation?'; 
                    Question.style.fontSize = '16px';
                    Question.className = 'QuestionR'


                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H,Question);

                    const largoArray = DataModalThree[0].Report[0].Results[0].Violence.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = false;
                            IdentificadorReportes = 4;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';
                        span.className = 'GSpan';
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].Violence[x].TypeViolence}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = false;
                        IdentificadorReportes = 4;
                        SendReport()
                    });
                });
                break;
            case 4://section selling bad thing.
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = '';

                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';

                    let Question = document.createElement('h2');
                    Question.innerText = 'What is being sold or promoted?'; 
                    Question.style.fontSize = '16px';
                    Question.className = 'QuestionR'


                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H,Question);

                    const largoArray = DataModalThree[0].Report[0].Results[0].Promoted.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = true;
                            IdentificadorReportes = 5;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';
                        span.className = 'GSpan';
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].Promoted[x].TypePromoted}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = true;
                        IdentificadorReportes = 5;
                        SendReport()
                    });
                });
                break;
            case 5://section nudity or sexual activity
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = '';

                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';

                    let Question = document.createElement('h2');
                    Question.innerText = 'How is this nudity or sexual activity?'; 
                    Question.style.fontSize = '16px';
                    Question.className = 'QuestionR'


                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H,Question);

                    const largoArray = DataModalThree[0].Report[0].Results[0].Nudity.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = false;
                            IdentificadorReportes = 6;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';
                        span.className = 'GSpan';
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].Nudity[x].TypeNudity}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = false;
                        IdentificadorReportes = 6;
                        SendReport()
                    });
                });
                break;
            case 6://Section Spam and Fraud
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = '';

                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';

                    let Question = document.createElement('h2');
                    Question.innerText = 'Which best describes the problem?'; 
                    Question.style.fontSize = '16px';
                    Question.className = 'QuestionR'


                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H,Question);

                    const largoArray = DataModalThree[0].Report[0].Results[0].Spam.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = false;
                            IdentificadorReportes = 7;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';
                        span.className = 'GSpan';
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].Spam[x].TypeSpam}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = false;
                        IdentificadorReportes = 7;
                        SendReport()
                    });
                });
                break;
            case 7: //false information.
                span.className += ' bottom';
                span.addEventListener('click',()=>{
                    Modal_ThreeP_div1.innerHTML = '';

                    const Span_H = document.createElement('span');
                    Span_H.style.background = 'none';
                    Span_H.style.color = 'black';
                    Span_H.style.height = '0.6cm';
                    Span_H.style.gap = '100px';
                    Span_H.style.justifyContent = 'space-around';
                    Span_H.style.cursor = 'default';
                    Span_H.className = 'GSpan';

                    let Question = document.createElement('h2');
                    Question.innerText = 'What kind of false information?'; 
                    Question.style.fontSize = '16px';
                    Question.className = 'QuestionR'


                    const h2_H =  document.createElement('h2');
                    h2_H .innerText = 'Report';
                    h2_H.style.fontSize = '16px';

                    const Btnclose = document.createElement('i');
                    Btnclose.className = 'bx bx-x';
                    Btnclose.style.fontSize = '25px';
                    Btnclose.addEventListener('click',ModalThree);
                    const BtnBack = document.createElement('i');
                    BtnBack.className = 'bx bx-chevron-left';
                    BtnBack.style.fontSize = '25px';

                    Span_H.append(BtnBack,h2_H,Btnclose);

                    Modal_ThreeP_div1.append(Span_H,Question);

                    const largoArray = DataModalThree[0].Report[0].Results[0].FalseInformation.length;
                    for(let x = 0 ; x < largoArray ; x++){
                        let span = document.createElement('span');
                        span.addEventListener('click',()=>{
                            NuevaOpcion_SendReport = false;
                            IdentificadorReportes = 8;
                            SendReport()
                        });
                        span.style.justifyContent = 'space-between';
                        span.style.paddingLeft = '5px';
                        span.style.paddingRight = '5px';
                        span.style.width = '95%';
                        span.className = 'GSpan';
                        span.innerHTML = `<span>${DataModalThree[0].Report[0].Results[0].FalseInformation[x].TypeInformation}</span><i class='bx bx-chevron-right' ></i>`;
                        
                        Modal_ThreeP_div1.append(span);
                    };
                    let divbtn = document.createElement('div');
                    divbtn.className = 'divbtn';
                    let BtnSubmit = document.createElement('button');
                    BtnSubmit.innerText = 'Submit report';

                    divbtn.append(BtnSubmit);
                    Modal_ThreeP_div1.append(divbtn);

                    BtnSubmit.addEventListener('click',()=>{
                        NuevaOpcion_SendReport = false;
                        IdentificadorReportes = 8;
                        SendReport()
                    });
                });
                break;
            default:
                break; 
        }

        Modal_ThreeP_div1.append(span)
    }

};
export default Report;