// import RederizadoStory from "./func/RederizadoStory";
import Storys from "./Subcomponents/Storys";
import DataStory from "../Data/DataStory";
import '../style/Header.less';

export default function Header() {

  const Storylist = DataStory.map( DS => {
    return(
      <Storys 
      img = {DS.img} 
      name = {DS.Name}
      ID = {DS.ID}
      />
    )
  });
  
  return (
    <div id="ContainerStory">
        {Storylist}
    </div>
  )
}


