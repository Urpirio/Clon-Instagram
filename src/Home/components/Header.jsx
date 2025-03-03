
import DataStory from "../Data/DataStory";
import '../style/Header.less';

export default function Header() {

    const CreateStory = () => {
        const LargoArray = DataStory.length;
        for(let x = 0; x < LargoArray ; x++){
            let div = document.createElement('div');
            div.className = 'C_Storys'
            let spanBackground = document.createElement('span');
            spanBackground.className = 'spanBackground';
            spanBackground.innerHTML = `<img src = '${DataStory[x].img}' alt ='${DataStory[x].Name} '/>`
            let spanName = document.createElement('span');
            spanName.className = 'spanName';
            spanName.innerText = `${DataStory[x].Name}`;
            div.append(spanBackground,spanName);
            document.getElementById('ContainerStory').append(div);
        }
    }
    setTimeout(CreateStory,1000);


  return (
    <div id="ContainerStory">
        
    </div>
  )
}
