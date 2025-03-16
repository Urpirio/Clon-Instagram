import DataStory from "../../../Data/DataStory";

export default function ModalStory(ID) {
  const ModalStory_div3 = document.querySelector('.ModalStory_div3');
  const ModalStory_div2 = document.querySelector('.ModalStory_div2');
  const ModalStory = document.querySelector('.ModalStory');
  const StoryImg = document.createElement('img');
  ModalStory.style.display = 'flex';

  for(let x = 0; x < DataStory.length; x++ ){
    if((ID+1) == DataStory[x].ID){
        let divRigth=  document.createElement('div');
        divRigth.className = 'ModalStory_div3_d1';
        divRigth.innerHTML = `
        <img src='${DataStory[x].Storys[0].img}' alt="" />
          <span>
            <img src='${DataStory[x].img}' alt="" />
          </span>`;

          ModalStory_div3.append(divRigth)

       
        
    }else{
        continue;
    }
  };

  for(let x = 0; x < DataStory.length; x++){
    if((ID + 2) == DataStory[x].ID){

      let divRigth2=  document.createElement('div');
      divRigth2.className = 'ModalStory_div3_d2';
      divRigth2.innerHTML = `
      <img src='${DataStory[x].Storys[0].img}' alt="" />
      <span>
        <img src='${DataStory[x].img}' alt="" />
      </span>`;
      ModalStory_div3.append(divRigth2)

    }else{
      continue;
    }

  };

  for(let x = 0; x < DataStory.length;  x++){
    if(ID == DataStory[x].ID){
      
      ModalStory_div2.innerHTML = `
            <div class='ModalStory_div2_d1'>
                
                <div class='MS_div2'>
                    <div class='MS_div1' id = 'MS_div1'>
                        
                    </div>
                    <div class='Gdiv'>
                        <div class='div1'>
                            <span>
                                <img src='${DataStory[x].img}' alt="" />
                            </span>
                            <span>
                                <h2>${DataStory[x].Name}</h2>
                             </span>
                        </div>
                        <div class='div2' id ='NavStory'>
                            
                        </div>
                    </div>
                </div>
                <div class='MS_div3'>
                    <span class='Span1' id = 'InputReplayStory'>
                        
                    </span>
                    <span class='Span2' id = 'ShareAndLike'>
                        
                    </span>
                    
                </div>
            </div>
      `;

      ModalStory_div2.insertBefore(StoryImg,document.querySelector('.ModalStory_div2_d1'));
      StoryImg.src = DataStory[x].Storys[0].img;
      

      const NavStory = document.getElementById('NavStory');
      const Volume = document.createElement('i');
      Volume.className = 'bx bx1 bxs-volume-full';
      const PauseS = document.createElement('i');
      PauseS.className = 'bx bx2 bx-pause';
      const ThreePoint = document.createElement('i');
      ThreePoint.innerText = '...';
      NavStory.append(Volume,PauseS,ThreePoint);

      const InputReplayStory = document.getElementById('InputReplayStory');
      const InputR = document.createElement('input');
      InputR.placeholder = 'reply to';
      InputR.type = 'text';
      InputReplayStory.append(InputR);

      const ShareAndLike = document.getElementById('ShareAndLike');
      const Heart = document.createElement('i');
      ShareAndLike.append(Heart);

      for(let f = 0; f < DataStory[x].Storys.length; f++){
       const div = document.createElement('div');
       const MS_div1 = document.getElementById('MS_div1');
       MS_div1.append(div);
      };



    }
  }





}
