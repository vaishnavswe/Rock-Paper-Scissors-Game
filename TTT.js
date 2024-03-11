let choices = ["Paper","Rock","Scissors"];
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

document.getElementById("rockBtn").onclick = function() {
    let player = "Rock"
    let computer = computerChoice();
    document.getElementById("player_choice_text").innerHTML = player;
    document.getElementById("computer_choice_text").innerHTML = computer;

    switch(computer) {
        case "Paper":
            document.getElementById("result_text").innerHTML = "Computer Wins!"
            document.getElementById("result_text").style.color = "red"
            break;
        case "Scissors":
            document.getElementById("result_text").innerHTML = "Player Wins!"
            document.getElementById("result_text").style.color = "blue"
            break;
            
        case "Rock":
            document.getElementById("result_text").innerHTML ="Draw!"
            document.getElementById("result_text").style.color = "black"
            break;    
    }
    
}

document.getElementById("paperBtn").onclick = function() {
    let player = "Paper"
    let computer = computerChoice();
    document.getElementById("player_choice_text").innerHTML = player;
    document.getElementById("computer_choice_text").innerHTML = computer;

    switch(computer) {
        case "Paper":
            document.getElementById("result_text").innerHTML = "Draw!"
            document.getElementById("result_text").style.color = "black"
            break;
        case "Scissors":
            document.getElementById("result_text").innerHTML = "Computer Wins!"
            document.getElementById("result_text").style.color = "red"
            break;
        case "Rock":
            document.getElementById("result_text").innerHTML = "Player Wins!"
            document.getElementById("result_text").style.color = "blue"
            break;    
    }
}

document.getElementById("scissorsBtn").onclick = function() {
    let player = "Scissors"
    let computer = computerChoice();
    document.getElementById("player_choice_text").innerHTML = player;
    document.getElementById("computer_choice_text").innerHTML = computer;

    switch(computer) {
        case "Paper":
            document.getElementById("result_text").innerHTML = "Player Wins!"
            document.getElementById("result_text").style.color = "blue"
            break;
        case "Scissors":
            document.getElementById("result_text").innerHTML = "Draw!"
            document.getElementById("result_text").style.color = "black"
            break;
        case "Rock":
            document.getElementById("result_text").innerHTML = "Computer Wins!"
            document.getElementById("result_text").style.color = "red"
            break;    
    }
}