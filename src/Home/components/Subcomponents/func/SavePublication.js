import DataContents from "../../../Data/DataContents";


const SavePublication = (SaveId) => {

    // console.log(BM)
    for(let x = 0; x < DataContents.length; x++){
        if(SaveId == DataContents[x].SaveId){
            if(DataContents[x].BoleanoSave ===  false){
                DataContents[x].BoleanoSave = true;
                const Sv = document.getElementById(`${SaveId}`);
                document.getElementById(`${SaveId}_${DataContents[x].UserName}`).className = 'bx bxs-bookmark';
                Sv.style.display = 'flex';
                Sv.style.animation = 'AvisoCopy 2s';
                setTimeout(()=>{
                    Sv.style.animation = 'AvisoCopy2 2s';
                    setTimeout(()=>{
                        Sv.style.display = 'none';
                    },2000)
                },2000);
            }else{
                // alert(DataContents[x].SaveClass)
                document.getElementById(`${SaveId}_${DataContents[x].UserName}`).className = 'bx bx-bookmark';
                DataContents[x].BoleanoSave = false;

            };
        }else{
            continue;
        }
    }
}
export default SavePublication;