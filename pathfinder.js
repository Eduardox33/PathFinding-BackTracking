function path(map){
    let solution=[]
    for(let i=0;i<map.length;i++){
        solution.push([]);
        for(let j=0;j<map.length;j++){solution[i].push("0");}
    }
    if(find_path(map,0,0,[],solution)){return solution;}return -1;
}

function isSafe(arr,y,x){
    if(y>=0 && y<arr.length && x>=0 && x<arr.length){
        if(arr[y][x]==="0"){return true;}
    }
    return false;
}

function find_path(map,y,x,visited,solution){

    if(y===map.length-1 && x===map.length-1){solution[y][x]="1";return true;}
    const current_position=`${y},${x}`;
    visited.push(current_position);

    // PATH 
    solution[y][x]="1";
    // DOWN
    if(isSafe(map,y+1,x) && visited.indexOf(`${y+1},${x}`)==-1){if(find_path(map,y+1,x,visited,solution)){return true;}}
    // RIGHT
    if(isSafe(map,y,x+1) && visited.indexOf(`${y},${x+1}`)==-1){if(find_path(map,y,x+1,visited,solution)){return true;}}
    // LEFT
    if(isSafe(map,y,x-1) && visited.indexOf(`${y},${x-1}`)==-1){if(find_path(map,y,x-1,visited,solution)){return true;}}
    // UP
    if(isSafe(map,y-1,x) && visited.indexOf(`${y-1},${x}`)==-1){if(find_path(map,y-1,x,visited,solution)){return true;}}
    
    // STEP BACK
    solution[y][x]="0";

    return false;
}