let boxes = document.querySelectorAll(".box");
let reset  = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let winnertag = document.querySelector(".winner");



let turn  = true;


const winparten = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn){
            box.innerText = "x";
            turn = false;
        }else{
            box.innerText = "o";
            turn = true;
        }
        box.disabled = true;
        chekwinner();
    })
});
 
const chekwinner = () =>{
    for(let parten of winparten){
        let pos1 = boxes[parten[0]].innerText;
        let pos2 = boxes[parten[1]].innerText;
        let pos3 = boxes[parten[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 ==pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
};
 const showwinner =(winner) =>{
    winnertag.innerText = `Congratulation , Winner is ${winner}`;
    disabledbox();
   
 };

 const disabledbox =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const anablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winnertag.innerText ="";
    }
 }
 reset.addEventListener("click",anablebox);