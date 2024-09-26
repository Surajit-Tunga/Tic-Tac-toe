let boxes = document.querySelectorAll (".box");
let reset = document.querySelector("#reset");
let win = document.querySelector("#win");




let turn0 = true;
const wining = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=> {
    box.addEventListener("click" ,()=> {
        if (turn0) {
            box.innerText= "O";
            turn0= false;
        } else {
            box.innerText= "X";
            turn0= true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = ()=> {
    for (let pattern of wining) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" &&pos3 != "" ) {
            if (pos1 === pos2 && pos2 === pos3 ) {
                win.innerText=`${pos1} is winner`;
                for (let box of boxes) {
                    box.disabled= true;
                }
            }
        }
    }

}

reset.addEventListener("click" , ()=> {
    for (let box of boxes) {
        box.disabled= false;
        box.innerText="";
    }
}
);
