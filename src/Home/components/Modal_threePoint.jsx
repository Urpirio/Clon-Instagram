import React from 'react';
import '../style/Modal_threePoint.less';
import DataModalThree from '../Data/DataModalThree';
import { UserDenuncia } from './Contents';
import DataContents from '../Data/DataContents';



export let ShowModalThreeON;
export default function Modal_threePoint() {
    let IdentificadorReportes;
    let NuevaOpcion_SendReport;

    const Cancel = () => {
            document.querySelector('.Modal_ThreeP').style.display = 'none';
    };

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
        IconClose.addEventListener('click',RestarMenu);

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
                        Btnclose.addEventListener('click',RestarMenu);
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
                        Btnclose.addEventListener('click',RestarMenu);
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
                        Btnclose.addEventListener('click',RestarMenu);
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
                        Btnclose.addEventListener('click',RestarMenu);
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
                        Btnclose.addEventListener('click',RestarMenu);
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
                        Btnclose.addEventListener('click',RestarMenu);
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
                        Btnclose.addEventListener('click',RestarMenu);
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
            if(UserDenuncia == DataContents[x].Number){
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
        btnclose.addEventListener('click',RestarMenu);
        divbtn.append(btnclose);
        Modal_ThreeP_div1.append(divbtn);
    };

    const RestarMenu = () => {//Se encarga de volver todo a la normalidad despues de cerrar un proceso
        document.querySelector('.Modal_ThreeP').style.display = 'none';
        const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
        Modal_ThreeP_div1.innerHTML = '';

       

      
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
                    let span3 = document.createElement('span');
                    span3.className = 'GSpan S3';
                    span3.innerText = 'Add to Favorites';
                    span3.addEventListener('click',()=>{
                        Add_to_Favorites();
                    });
                    Modal_ThreeP_div1.append(span3);
                    continue;
                }else if(x == 4){
                    let span4 = document.createElement('span');
                    span4.className = 'GSpan S4';
                    span4.innerText = 'Go to post';
                    span4.addEventListener('click',()=>{
                        GotoPost();
                    });
                    Modal_ThreeP_div1.append(span4);
                    continue;
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
    
                    });
                    Modal_ThreeP_div1.append(span7);
                    continue;
                }else if(x == 8){
                    let span8 = document.createElement('span');
                    span8.className = 'GSpan S8';
                    span8.innerText = 'About this account';
                    span8.addEventListener('click',()=>{
    
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
        


    const Unfollow = () => {

    };

    const Add_to_Favorites = () => {

    };

    const GotoPost = () => {

    };

    const Shareto = () => {

    };

    const Copy_link = () => {

    };

  return (
    <dialog className='Modal_ThreeP'>
        <div className='Modal_ThreeP_div1'>
           <span onClick={Report} className="GSpan red top S1" id='S1'>Report</span>
           <span onClick={Unfollow} className="GSpan red S2">Unfollow</span>
           <span onClick={Add_to_Favorites} className="GSpan S3">Add to Favorites</span>
           <span onClick={GotoPost} className="GSpan S4">Go to post</span>
           <span onClick={Shareto} className="GSpan S5">Share to...</span>
           <span onClick={Copy_link} className="GSpan S6">Copy link</span>
           <span className="GSpan S7">Embed</span>
           <span className="GSpan S8">About this account</span>
           <span onClick={Cancel} className="GSpan bottom S9">Cancel</span>
        </div>
    </dialog>
  )
};
