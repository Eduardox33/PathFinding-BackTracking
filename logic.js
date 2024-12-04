const SIZE=10;
const mapa=document.getElementById("mapa");
let digital_map=[];


function initial_render(){
    let ret="";
    for(let i=0;i<SIZE;i++){
        digital_map.push([])
        ret+="<tr>";
        for(let j=0;j<SIZE;j++){ret+="<td onclick='addWall(this)'></td>";digital_map[i].push("0");}
        ret+="</tr>";
    }
    mapa.innerHTML=ret;
    mapa.rows[0].cells[0].style.backgroundColor="green";
    mapa.rows[SIZE-1].cells[SIZE-1].style.backgroundColor="green";
    return 0;
}

initial_render();

function addWall(cuadro){
    const dataIndex=cuadro.cellIndex;
    const rowIndex=cuadro.parentElement.rowIndex;
    if((dataIndex===0 && rowIndex===0)|(dataIndex===SIZE-1 && rowIndex===SIZE-1)){return;}
    if(mapa.rows[rowIndex].cells[dataIndex].style.backgroundColor==="red"){
        mapa.rows[rowIndex].cells[dataIndex].style.backgroundColor="gray";
        digital_map[rowIndex][dataIndex]="0";
    }else{
        mapa.rows[rowIndex].cells[dataIndex].style.backgroundColor="red";
        digital_map[rowIndex][dataIndex]="#";
    }
    return showPath();  
}

function showPath(){
    const solution=path(digital_map);
    if(solution===-1){
        for(let i=0;i<SIZE;i++){
            for(let j=0;j<SIZE;j++){
                if(mapa.rows[i].cells[j].style.backgroundColor==="green"){
                    mapa.rows[i].cells[j].style.backgroundColor="grey";
                }
            }
        }
        return;
    }
    for(let i=0;i<solution.length;i++){
        for(let j=0;j<solution.length;j++){
            if(mapa.rows[i].cells[j].style.backgroundColor==="green" && solution[i][j]!=="1"){
                mapa.rows[i].cells[j].style.backgroundColor="grey";
            }
            if(solution[i][j]==="1"){mapa.rows[i].cells[j].style.backgroundColor="green";}
        }
    }
    return;
}