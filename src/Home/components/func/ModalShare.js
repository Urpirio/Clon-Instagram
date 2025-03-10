import DataContents from "../../Data/DataContents";
import SubModalShare from "./Subfunc/SubModalShare";




export default async function ModalShare() {
  
  document.querySelector('.ModalShare').style.display = 'flex';
  const ModalShare__div1 = document.querySelector('.ModalShare__div1');

  const DivHeader = document.createElement('div');
  DivHeader.className = 'DivHeader';
  const SpanHeader = document.createElement('span');
  SpanHeader.className = 'SpanHeader';
  SpanHeader.innerText = 'Share';
  const IconClose = document.createElement('i');
  IconClose.className = 'bx bx-x';
  IconClose.addEventListener('click',()=>{
    document.querySelector('.ModalShare').style.display = 'none';
    document.querySelector('.ModalShare__div1').innerHTML = '';
  });
  DivHeader.append(SpanHeader,IconClose);


  const DivSearch = document.createElement('div');
  DivSearch.className = 'DivSearch';

  const SpanSearch = document.createElement('span');
  SpanSearch.className = 'SpanSearch';

  const IconSearch = document.createElement('i');
  IconSearch.className = 'bx bx-search';

  const InputSearch = document.createElement('input');
  InputSearch.placeholder = 'Search';
  InputSearch.addEventListener('input',()=>{
    let Existe;
    for(let n = 0 ; n < DataContents.length; n++){
      let ArrayDataUserName = DataContents[n].UserName.split('');
      let ArrayInput = InputSearch.value.split('');
      if(InputSearch.value === DataContents[n].UserName){
        DataContents[n].BoleanoSearch = true;
        Existe = true;
      }else if(InputSearch.value === ''){
        for(let D = 0; D < DataContents.length; D++){
          DataContents[D].BoleanoSearch = false;
          document.getElementById(`Contacto${D}`).style.display = 'flex';
        };
      }else{
        for(let c = 0; c < ArrayInput.length; c++ ){
          if(ArrayDataUserName[c] ==  ArrayInput[c]){
            DataContents[n].BoleanoSearch = true;
            Existe = true;
            
          }else{
            DataContents[n].BoleanoSearch = false;
            continue;
          }
        }
      }

      
      
    };

    if(Existe ===  true){
      for(let D = 0; D < DataContents.length; D++){
        if(DataContents[D].BoleanoSearch == true){
          document.getElementById(`Contacto${D}`).style.display = 'flex';
        }else{
          document.getElementById(`Contacto${D}`).style.display = 'none';
        }
      };
    }else{

    };



  });
  InputSearch.addEventListener('click',()=>{
      btnCancelSearch.style.display = 'flex';
  });

  const btnCancelSearch = document.createElement('i');
  btnCancelSearch.className = 'bx bx-x';
  btnCancelSearch.addEventListener('click', async ()=>{
    setTimeout(()=>{
      InputSearch.removeAttribute('disabled');
      
    },100)
    InputSearch.setAttribute('disabled','true');
    btnCancelSearch.style.display = 'none';
    InputSearch.value = '';
  });



  SpanSearch.append(IconSearch,InputSearch,btnCancelSearch);
  DivSearch.append(SpanSearch);
  

  const DivContacts = document.createElement('div');
  DivContacts.className = 'DivContacts';

  for(let x = 0 ; x < DataContents.length; x++){

    const spanConteiner = document.createElement('span');
    spanConteiner.className = 'spanConteiner';
    spanConteiner.id = `Contacto${x}`;
    let Existe;

    let IconCheck = document.createElement('i');

    spanConteiner.addEventListener('click',()=>{//Usario seleccionado.

      IconCheck.className = `bx bx-check User${x}`;

      if(DataContents[x].BoleanoSendMessage == false){

        document.querySelector('.DivShare').innerHTML = '';
        DataContents[x].BoleanoSendMessage = true;
        let SpanMessage = document.createElement('span');
        let InputMessage = document.createElement('input');
        InputMessage.placeholder = 'Write a message...';
        SpanMessage.append(InputMessage);
  
        let divbtn = document.createElement('div');
        divbtn.className = 'divbtn';
        const btnSendM  = document.createElement('button');
        btnSendM.innerText = 'Send';
        divbtn.append(btnSendM);

        spanImg.append(IconCheck);
  
        document.querySelector('.DivShare').append(SpanMessage,divbtn);
        document.querySelector('.DivShare').style.flexDirection = 'column';
        document.querySelector('.DivShare').style.justifyContent = 'center';
        document.querySelector('.DivShare').style.alignItems = 'center';
      }else{
        DataContents[x].BoleanoSendMessage = false;
        for(let c = 0 ; c < DataContents.length; c++){
          if(DataContents[c].BoleanoSendMessage == true){
            Existe = true;
          }else{
            IconCheck.remove();
          };
        };

        if(Existe == undefined){
          document.querySelector('.DivShare').remove();
          SubModalShare();
        }else{
          
        };

      }


    });

    const img = document.createElement('img');
    img.src = DataContents[x].FotoPerfil;
    const spanImg = document.createElement('span');

    const UserName = document.createElement('span');
    UserName.innerText = DataContents[x].UserName;
    spanImg.append(img);
    

    spanConteiner.append(spanImg,UserName);

    DivContacts.append(spanConteiner)
  };

  


  ModalShare__div1.append(DivHeader,DivSearch,DivContacts);
  SubModalShare();
  // const DivShare = 
};
