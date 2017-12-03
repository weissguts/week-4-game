$(document).ready(function () {
    //Variables
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    var ranNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var gem1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var gem2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var gem3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var gem4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);


    //JQ to replace HTML//
    $('#ai-score').text(ranNumber);
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    $('#currScore').text(currentScore);

    //Gems//
    $('#gem1').on('click', function () {
        currentScore = currentScore + gem1;
        $('#currScore').text(currentScore);

        if (currentScore == ranNumber) {
            win();
        } else if (currentScore > ranNumber) {
            lose();
        }
    });

    $('#gem2').on('click', function () {
        currentScore = currentScore + gem2;
        $('#currScore').text(currentScore);

        if (currentScore == ranNumber) {
            win();
        } else if (currentScore > ranNumber) {
            lose();
        }
    });

    $('#gem3').on('click', function () {
        currentScore = currentScore + gem3;
        $('#currScore').text(currentScore);

        if (currentScore == ranNumber) {
            win();
        } else if (currentScore > ranNumber) {
            lose();
        }
    });

    $('#gem4').on('click', function () {
        currentScore = currentScore + gem4;
        $('#currScore').text(currentScore);

        if (currentScore == ranNumber) {
            win();
        } else if (currentScore > ranNumber) {
            lose();
        }
    });


    //Clears game after win or loss.
    function clearScore(){
        currentScore = 0;
        ranNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        gem1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        gem2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        gem3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        gem4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        $('#ai-score').text(ranNumber);
        $('#currScore').text(currentScore);
    }

    function win() {
        wins++;
        $('#wins').text("Wins: " + wins);
        clearScore()
    }

    function lose() {
        losses++;
        $('#losses').text("Losses: " + losses);
        clearScore()

    }




});


