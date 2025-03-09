import ModalThree, { UserClick } from "./Modalthree";
import DataModalThree from "../../Data/DataModalThree";
import DataContents from "../../Data/DataContents";

const About_This_Account = () => {
    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
    Modal_ThreeP_div1.innerHTML = '';
    Modal_ThreeP_div1.style.gap = '10px';
    // Modal_ThreeP_div1.style.overhidden = 'scroll';

    let SpanH = document.createElement('span');
    SpanH.className = 'GSpan';
    SpanH.style.background = 'none';
    SpanH.style.color = 'black';
    SpanH.style.height = '0.6cm';
    SpanH.style.fontWeight = '500';
    SpanH.style.justifyContent = 'center';
    SpanH.style.gap = '200px';
    SpanH.style.cursor = 'default';
    SpanH.innerText = 'About this account';

    let DivMA = document.createElement('div');
    DivMA.className = 'DivMA';
    

    const LargoArrayD = DataContents.length;
    for(let x = 0; x < LargoArrayD ; x ++){
        if(UserClick == DataContents[x].Number){
            DivMA.innerHTML = `
            <img src = '${DataContents[x].FotoPerfil}' alt = ''/>
            <span>${DataContents[x].UserName}</span>
            <p>To help keep our community authentic, we’re
             showing information about accounts on Instagram.
              <a href="">See why this information is important.<a/></p>`;
        }else{
            continue;
        }
    };

    
    Modal_ThreeP_div1.append(SpanH,DivMA)



    const LargoArray = DataModalThree[0].About_This_Account.length;
    let GDivDateJ = document.createElement('div');
    for(let x = 0; x < LargoArray; x++){
        GDivDateJ.className = 'GDivDateJ';
        let DivDateJ = document.createElement('div');
        DivDateJ.className = 'DivDateJ';
        DivDateJ.innerHTML = `${DataModalThree[0].About_This_Account[x].Icon}
        <div>
            <h3>${DataModalThree[0].About_This_Account[x].Title}</h3>
            <span>${DataModalThree[0].About_This_Account[x].Description()}</span>
        </div>`;

       GDivDateJ.append(DivDateJ);
       Modal_ThreeP_div1.append(GDivDateJ);
    };

    const DivMa = document.createElement('div');
    DivMa.className = 'DivMa';
    const P = document.createElement('p');
    P.innerHTML = `Profiles can be verified by Meta, based 
    on their activity across Meta products or documents they 
    provide. Verified badges are displayed on these profiles.<br><br>
    Some verified profiles are owned by a notable person, brand
    or entity, while others subscribe to Meta Verified.<a href="">Learn more</a>`;
    DivMa.append(P);

    const divbtn = document.createElement('div');
    divbtn.className = 'divbtn';
    divbtn.style.gap = '10px';


    const btnGetV = document.createElement('button');
    btnGetV.innerText = 'Get a verified badge';
    btnGetV.addEventListener('click',()=>{
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
    
    const Btnclose = document.createElement('button');
    Btnclose.innerText = 'Close';
    Btnclose.style.background = 'none';
    Btnclose.style.color = 'black';
    Btnclose.addEventListener('click',ModalThree);
    divbtn.append(btnGetV,Btnclose);


    Modal_ThreeP_div1.append(DivMa,divbtn);

};
export default About_This_Account;