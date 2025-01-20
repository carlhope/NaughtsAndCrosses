


    let player = 1;
    let moves = 0;
    let player1Moves = 0;
    let player2Moves = 0;
    var board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let win = false;
    let winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [6, 4, 2]];
    let message = document.getElementById("message");
    let boxes = document.querySelectorAll('.board-box');
    let overlay = document.getElementById("overlay");

    //play the game
 boxes.forEach(function(element) {
    element.addEventListener('click', function(event) {
        //human turn
        
        if(moves>0&&player1Moves>player2Moves){
            alert("It's not your turn!");
            return;
            
        }
        player1Moves++;
        let clickedElement = event.target;
        let id = clickedElement.id;
        if (win) {
            return;
        }
        if (board[id] === 0) {
                clickedElement.innerText = "👤";
                board[id] = 1;
                player = 2;
                moves++;
            checkWin();
            if (win) {
                return;
                
            }
            else{
                  
                    setTimeout(computerTurn ,2000);
                
                }

        }
    });
});
    //check for a winner
    function checkWin() {
        for (let i = 0; i < winCombos.length; i++) {
            if (board[winCombos[i][0]] === board[winCombos[i][1]] && board[winCombos[i][1]] === board[winCombos[i][2]] && board[winCombos[i][0]] !== 0) {
                win = true;
                winner = board[winCombos[i][0]];
                if (winner === 1) {
                    message.innerText = "User " + " wins!";
                alert("User "+ "wins!");
                }
                else {
                    message.innerText = "Computer " + " wins!";
                    alert("Computer " + " wins!");
                }
                
                message.hidden = false;
            }
        }
        if (moves === 9 && !win) {
            message.innerText = "It's a tie!";
            alert("It's a tie!");
            message.hidden = false;
        }
    }
    //reset the game
    function reset() {

        player = 1;
        player1Moves = 0;
        player2Moves = 0;
        moves = 0;
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        win = false;
        document.getElementById("message").innerText = "";
        for (let i = 0; i < 10; i++) {
            document.getElementById(i).innerText = "";
            message.hidden = true;
        }

    }
    function computerTurn(){
        let random = Math.floor(Math.random() * 9);
        if (board[random] === 0) {
            document.getElementById(random).innerText = "🖥️";
            board[random] = 2;
            player = 1;
            moves++;
            player2Moves++;
            checkWin();
            if (win) {
                return;
            }
        } else {
            computerTurn();
        }
    }

