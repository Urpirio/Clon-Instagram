import ModalThree from "./Modalthree";

const Embed = () => {
    const Modal_ThreeP_div1 = document.querySelector('.Modal_ThreeP_div1');
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
};
export default Embed;