let btn = Array.from(document.querySelectorAll(".box"));
let resetbtn=document.querySelector(".reset");
let newBtn=document.querySelector(".newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
 const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
    btn.forEach(box => {
        box.style.backgroundColor = "#ffffc7";
        box.innerText = "";
    });
    
};
 const disableBox=()=>{
    for( let box of btn){
        box.disabled=true;
    }
 };
 const enableBox=()=>{
    for( let box of btn){
        box.disabled=false;
        box.innerText=""
    }
 };

 //click event
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("buttton was clicked")
        if(turn0){
            box.innerText="O"
            box.style.color="#AAADC4";
            turn0=false;
        }
        else{
            box.innerText="X"
            box.style.color="#8D909B";
            turn0=true;
        }
        box.disabled=true;

        checkWinnner();
    })
})

const checkWinnner=()=>{
    for (let pattern of winpatterns){
        let pos1=btn[pattern[0]];
        let pos2=btn[pattern[1]];
        let pos3=btn[pattern[2]];

        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                pos1.style.backgroundColor="#D6EEFF"
                pos2.style.backgroundColor="#D6EEFF"
                pos3.style.backgroundColor="#D6EEFF"
                showWinner(pos1Val);
            }
        }
    }

};

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations Winner is ${Winner}`;

    msgContainer.classList.remove("hide");
    disableBox();
}

newBtn.addEventListener("click",()=>{
    resetGame();
})
resetbtn.addEventListener("click", resetGame);

