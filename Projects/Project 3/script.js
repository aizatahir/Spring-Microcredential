
let secretNumber = 50;

const displayMessage = function (message) {
    document.getElementById("current_message").textContent = message;
}

let current_score = Number(document.getElementById("current_score").textContent);

document.getElementById("checkButton").addEventListener("click", function () {

    const userInputNumber = Number(document.getElementById("inputNumber").value);


    if (isNaN(userInputNumber) || userInputNumber < 1 || userInputNumber > 100) {
        displayMessage("Invalid input! Enter a number from 1 to 100 only!");
    }

    else if (userInputNumber != secretNumber) {
        current_score = current_score - 1;
        document.getElementById("current_score").textContent = current_score;



        if (userInputNumber < secretNumber) {
            displayMessage("Too Low!");
        }
        else if (userInputNumber > secretNumber) {
            displayMessage("Too High!");
        }

        if (current_score === 0) {
            displayMessage("Sorry, you lost!");
            document.getElementById("checkButton").disabled = true;
            document.getElementById("logo_image").src = "https://th.bing.com/th/id/Ra5015b744ec33e16d26fb85f296a3c7b?rik=MiDULQ5jhC5IZQ&riu=http%3a%2f%2fwww.choicenotchance.org.nz%2ffiles%2fyou-lose-banner-sm-%2540x2.png&ehk=R7BbFB2JhtZNpNEi85UrEydo2aO7K%2bsoaoQHU%2fr0xA8%3d&risl=&pid=ImgRaw";
        }

        guessHistory(userInputNumber);

    }

    else {

        displayMessage("Congrats! You win!");

        document.getElementById("logo_image").src = "https://th.bing.com/th/id/Rb11d562a540431d8ba621e4b3b3642ce?rik=yaregdML8cqULg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWinner-PNG-Image.png&ehk=uwXKUQAcOqUEAyfG2SoVk7QI7lqSJe63j8nELRcpdBc%3d&risl=&pid=ImgRaw";
        document.body.style.background = `linear-gradient(lightgreen,pink)`;

        guessHistory(userInputNumber);


        document.getElementById("secret_number").textContent = secretNumber;


        let highest_score = Number(document.getElementById("highest_score").textContent);

        if (current_score > highest_score) {

            document.getElementById("highest_score").textContent = current_score;
        }

    }

    document.getElementById("inputNumber").value = "";

});



document.getElementById("resetButton").addEventListener("click", function () {
    current_score = 10;
    document.getElementById("current_score").textContent = current_score;
    document.getElementById("logo_image").src = "https://th.bing.com/th/id/R2486acdc2db1242ebcb1563bb7adc5df?rik=UHGxmZTbACdUfQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fpink-question-mark-29.png&ehk=X7Z%2fqaqA6GSSYcQPftwEEu1pKD2uBHazIHOMi9WHUfc%3d&risl=&pid=ImgRaw";
    document.getElementById("current_message").textContent = 'START GUESSING';
    document.getElementById("guess_history").textContent = "";
    document.getElementById("inputNumber").value = "";
    document.getElementById("secret_number").textContent = "";
    document.body.style.background = `linear-gradient(lightgreen, lightpink)`;
    document.getElementById("checkButton").disabled = false;


});



function guessHistory(userInputNumber) {
    let guess_history = document.getElementById("guess_history").textContent;

    document.getElementById("guess_history").textContent = guess_history + "  " + userInputNumber;


    if (guess_history === "") {
        document.getElementById("guess_history").textContent = guess_history + " " + userInputNumber;

    }
    else {
        document.getElementById("guess_history").textContent = guess_history + ", " + userInputNumber;
    }

}
