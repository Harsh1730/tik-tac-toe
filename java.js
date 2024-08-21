let turn = "s";
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]
function har() {
    let tik = document.querySelectorAll(".tik");
    tik.forEach((tik) => (tik.innerHTML = ""));
}
let reset = document.querySelector(".reset").onclick = () => { har(); console.log("reset") };
har();
let arr = [];
let tik = document.querySelectorAll(".tik");
harry();

function harry() {

    turn = prompt("player 1 enter your symbol");
    turn = turn.toUpperCase();
    if (turn != "X" && turn != "O") {
        alert("Invalid input");
        harry();
    }
}
console.log(turn);

tik.forEach((tik) => {
    tik.onclick = () => {
        if (tik.innerHTML == "" && turn == "X") {
            tik.innerHTML = turn;
            checkwinner();
            turn = "O";
            
        }
        else if (tik.innerHTML == "" && turn == "O") {
            tik.innerHTML = turn;
            checkwinner();
            turn = "X";
        }
    }
}
);

const checkwinner=()=>
{
    
      for(pat of win)
        {
            if(tik[pat[0]].innerHTML==tik[pat[1]].innerHTML&&tik[pat[1]].innerHTML==tik[pat[2]].innerHTML&&tik[pat[0]].innerHTML==tik[pat[2]].innerHTML&&tik[pat[0]].innerHTML!=""&& tik[pat[1]]!=""&&tik[pat[2]]!="")
              setTimeout(()=>{ if(turn=="O")
            turn="X";
            else 
            {
                turn ="O";
            }
                alert(turn+" wins"); har();},500);
                 
             
            
        }    
}


