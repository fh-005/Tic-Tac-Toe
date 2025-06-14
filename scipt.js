const Boxes = document.querySelectorAll(".boxes");

const messages = document.querySelector(".msg")

const resetBtn = document.querySelector(".reset-btn");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

let positions = [0,1,2,3,4,5,6,7,8];

resetBtn.onclick = () => {
    for(let pos of positions){
        Boxes[pos].innerHTML = "";
        Boxes[pos].disabled = false;
    }
} 

Boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerHTML = "X"
            turnO = false;
        }else{
            box.innerHTML = "O"
            turnO = true;
        }
        box.disabled = true;
        checking(box);
    })
})

function checking(e){
    for(let pattern of winPatterns){
        let pos1Value = Boxes[pattern[0]].innerHTML;
        let pos2Value = Boxes[pattern[1]].innerHTML;
        let pos3Value = Boxes[pattern[2]].innerHTML;
        if(pos1Value !== "" && pos2Value !== "" && pos3Value !== ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value && pos1Value === pos3Value){
                messages.innerHTML = `The winner is ${pos1Value}`;
                messages.style.display = "block";
                for(let pos of positions){
                    Boxes[pos].disabled = true;
                }
            }
        }
    }
}

