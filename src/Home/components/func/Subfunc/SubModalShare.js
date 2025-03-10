import Copy_link from "../Copy_Link";

const SubModalShare = () => {
    const ModalShare__div1 = document.querySelector('.ModalShare__div1');
    const DivShare = document.createElement('div');
    DivShare.className = 'DivShare';
  
    fetch('https://randomapi.com/api/7c37714d346d367a06da78503e1c2317').then(//Api web
      repuesta => repuesta.json()
    ).then(
      (Data)=>{
        for(let x = 0 ; x < Data.results[0].ModalPerfil.length; x++){
          if(x == 0){//Copy Click
  
            let SpanC = document.createElement('span');
            SpanC.addEventListener('click',()=>{
              Copy_link(x);
            });
            SpanC.className = 'SpanC';
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          }else if(x == 1){//Facebook
            let SpanC = document.createElement('span');
            SpanC.className = 'SpanC';
            SpanC.addEventListener('click',()=>{
              window.location.href = 'https://web.facebook.com/?_rdc=1&_rdr#';
            });
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          }else if(x == 2){//Messenger
  
            let SpanC = document.createElement('span');
            SpanC.className = 'SpanC';
            SpanC.addEventListener('click',()=>{
              window.location.href = 'https://www.messenger.com/';
            });
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          }else if(x == 3){//Whatsapp
  
            let SpanC = document.createElement('span');
            SpanC.className = 'SpanC';
            SpanC.addEventListener('click',()=>{
              window.location.href = 'https://web.whatsapp.com/';
            });
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          }else if(x == 4){//Email
  
            let SpanC = document.createElement('span');
            SpanC.className = 'SpanC';
            SpanC.addEventListener('click',()=>{
              window.location.href = 'mailto:prueba@gmail.com';
            });
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          }else if(x == 5){//Twitter
  
            let SpanC = document.createElement('span');
            SpanC.className = 'SpanC';
            SpanC.addEventListener('click',()=>{
              window.location.href = 'https://x.com/?lang=es';
            });
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          }else{//See all
  
            let SpanC = document.createElement('span');
            SpanC.className = 'SpanC';
            SpanC.addEventListener('click', async ()=>{
  
            navigator.share({
              title: 'Clon-Instagram',
              url: window.location.href,
            });
  
            });
            let Icon = document.createElement('i');
            Icon.className = Data.results[0].ModalPerfil[x].Icon;
            let Title = document.createElement('h4');
            Title.innerText = Data.results[0].ModalPerfil[x].Title;
            SpanC.append(Icon,Title);
            DivShare.append(SpanC);
  
          };
  
        };
      }
    ).catch((Error)=>{
  
      console.error(Error);
      
    });

    ModalShare__div1.append(DivShare);

};
export default SubModalShare;