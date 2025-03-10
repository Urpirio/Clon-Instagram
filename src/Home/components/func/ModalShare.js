import DataContents from "../../Data/DataContents";
import DataModalShare from "../../Data/DataModalShare";




export default async function ModalShare() {

   
  
  

  const ModalShare__div1 = document.querySelector('.ModalShare__div1');
  const DivHeader = document.createElement('div');

  const DivSearch = document.createElement('div');
  const SpanSearch = document.createElement('span');
  const InputSearch = document.createElement('input');
  const btnCancelSearch = document.createElement('button');

  const Contacts = document.createElement('div');

  for(let x = 0 ; x < DataContents.length; x++){
    const spanConteiner = document.createElement('span');
    const img = document.createElement('img');
    img.src = DataContents[x].FotoPerfil;
    const UserName = document.createElement('span');
    UserName.innerText = DataContents[x].UserName;
    spanConteiner.append(img,UserName)
    Contacts.append(spanConteiner)
  };

  fetch('https://randomapi.com/api/7c37714d346d367a06da78503e1c2317').then(
    repuesta => repuesta.json()
  ).then(
    (Data)=>{
      for(let x = 0 ; x < Data.results[0].ModalPerfil.length; x++){
        console.log(Data.results[0].ModalPerfil[x])
      }
    }
  ).then(
    
  ).catch(()=>{
    
  })

};
