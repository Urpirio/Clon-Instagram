import DataContents from "../../../Data/DataContents";

const Like = (IdLike) => {
    // alert(IdLike)
    for(let x = 0; x < DataContents.length; x++){
        if(IdLike == DataContents[x].Like){
            if(DataContents[x].BoleanoLike === false){
                let L = document.getElementById(`${IdLike}`);
                L.style.color = 'red';
                L.className = 'bx bxs-heart';
                DataContents[x].BoleanoLike = true;
            }else{
                let L = document.getElementById(`${IdLike}`);
                L.style.color = 'black';
                L.className = 'bx bx-heart';
                DataContents[x].BoleanoLike = false;
            };
        };
    };

    
};
export default Like;