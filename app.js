let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnX = true;

let sols = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const handlers = [];

function handleClick(i){
    return function (){
    if(turnX === true && boxes[i].innerText === ''){
        console.log("button was clicked by X");
        boxes[i].innerText = 'X';
        turnX = false;
        }
        else if(turnX === false && boxes[i].innerText === ''){
        console.log("button was clicked by O");
        boxes[i].innerText = 'O';
        turnX = true;
        }
        if(check()){
            console.log("removed");
            boxes.forEach((box,index) => {
                box.removeEventListener("click", handlers[index]);
            });
        }
    } 
}

function check(){

    
    for(let i = 0; i < sols.length; i++){

        let temp = sols[i];
        console.log(temp[0], temp[1], temp[2]);

        if(boxes[temp[0]].innerText === boxes[temp[1]].innerText && boxes[temp[1]].innerText === boxes[temp[2]].innerText && boxes[temp[0]].innerText !== "" && boxes[temp[1]].innerText !== "" && boxes[temp[2]].innerText !== ""){
            
            return true;
        }
    }
    return false;
}

function start(){

    boxes.forEach(box => {
        box.innerText = "";
    })
for(let i = 0; i < boxes.length; i++){

    let temp = handleClick(i);
    handlers.push(temp);
    boxes[i].addEventListener("click", temp);
}
}

start();

resetBtn.addEventListener("click", start);



