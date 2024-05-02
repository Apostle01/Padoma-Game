const emojis = ["😍","😍","💕","💕","❤️","❤️","😭","😭","🥱","🥱","🤔","🤔","😗","😗","🤣","🤣"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
var timer; // Variable to store the timer

function startTimer() {
    timer = setInterval(function() {
        var timerDisplay = document.getElementById('timerDisplay');
        var timeLeft = parseInt(timerDisplay.textContent);
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000); // 1 second
}

function endGame() {
    clearInterval(timer); // Clear the timer
    alert('Time is up! Game over!');
}

function endGame() {
    clearTimeout(timer); // Clear the timer
    alert('Time is up! Game over!');
}

function restartTimer() {
    clearInterval(timer); // Clear the timer
    var timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = '60'; // Reset the timer display
    startTimer(); // Restart the timer
}

for (var i =0; i<emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function(){
        this.classList.add('boxOpen');
        setTimeout(function(){
            var openBoxes = document.querySelectorAll('.boxOpen');
            if (openBoxes.length > 1){
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML){
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                } else {
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                }

                if (document.querySelectorAll('.boxMatch').length == emojis.length){
                    alert('You win!');
                    clearInterval(timer); // Clear the timer
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}
startTimer(); // Start the timer when the game starts