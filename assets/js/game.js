
// Array to store the last three results
const lastResults = [];
// Counter for the number of chances left
let chancesLeft = 5;

function raffle() {
    // Check if there are chances left
    if (chancesLeft === 0) {
        document.getElementById('winMessage').textContent = 'Game over. You have used all your chances.';
        return;
    }

    // Generate a random number between 1 and 20
    const diceValue = Math.floor(Math.random() * 20) + 1;

    // Add the result to the array
    lastResults.push(diceValue);

    // Keep only the last 3 results
    if (lastResults.length > 3) {
        lastResults.shift(); // Remove the oldest result
    }

    // Display the current result and the last 3 results
    document.getElementById('currentResult').textContent = diceValue;
    document.getElementById('lastResults').textContent = lastResults.join(', ');

    // Check if the result is equal to 6
    if (diceValue === 6) {
        document.getElementById('winMessage').textContent = 'Your name is entered into the raffle! Good luck!';
        chancesLeft = 0;
    } else {
        chancesLeft--;
        document.getElementById('winMessage').textContent = '';
    }

}

// jQuery code to toggle car description visibility
$(document).ready(function () {
    $('#car-image-1').click(function () {
        $(this).find('.card-description').toggle("slow");
    });
});

$(document).ready(function () {
    $('#car-image-2').click(function () {
        $(this).find('.card-description').toggle('slow');
    });
});

$(document).ready(function () {
    $('#car-image-3').click(function () {
        $(this).find('.card-description').toggle('slow');
    });
});

$(document).ready(function () {
    $('#car-image-4').click(function () {
        $(this).find('.card-description').toggle('slow');
    });
});
