var me;
var myScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];
window.onload = function (){
    for (let i=0; i< 3; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choice").append(choice);
    }
}

function selectChoice(){
    me = this.id;
    document.getElementById("my-choice").src = me + ".png";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if (me == opponent){
        myScore += 1;
        opponentScore += 1;
    } else {
        if (me == "rock"){
            if (opponent == "scissors"){
                myScore +=1;
            } else if (opponent == "paper"){
                opponentScore += 1;
            }
        }
        else if (me == "scissors"){
            if (opponent == "paper"){
                myScore +=1;
            } else if (opponent == "rock"){
                opponentScore += 1;
            }
        }

        else if (me == "paper"){
            if (opponent == "rock"){
                myScore +=1;
            } else if (opponent == "scissors"){
                opponentScore += 1;
            }
        }
    }

    document.getElementById("my-score").innerText = myScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}