import ModalThree from "./Modalthree";



const Copy_link = async () => {
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

};
export default Copy_link;