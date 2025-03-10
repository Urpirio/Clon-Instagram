import ModalThree from "./Modalthree";



const Copy_link = async (click) => {
        if(click == undefined){
            const AvisoCopy =  document.querySelector('.AvisoCopy');

            AvisoCopy.style.display = 'flex';
            AvisoCopy.style.animation = 'AvisoCopy 2s';


            setTimeout(()=>{
                AvisoCopy.style.animation = 'AvisoCopy2 2s';
                setTimeout(()=>{
                    AvisoCopy.style.display = 'none';
                },2000)
            },2000);

            navigator.clipboard.writeText(window.location.href);// Esto sirbe para copiar el texto;
        
            ModalThree()
        }else{
            click = undefined;
            document.querySelector('.ModalShare').style.display = 'none';
            document.querySelector('.ModalShare__div1').innerHTML = '';

            const AvisoCopy =  document.querySelector('.AvisoCopy');

            AvisoCopy.style.display = 'flex';
            AvisoCopy.style.animation = 'AvisoCopy 2s';


            setTimeout(()=>{
                AvisoCopy.style.animation = 'AvisoCopy2 2s';
                setTimeout(()=>{
                    AvisoCopy.style.display = 'none';
                },2000)
            },2000);

            navigator.clipboard.writeText(window.location.href)
        };

};
export default Copy_link;