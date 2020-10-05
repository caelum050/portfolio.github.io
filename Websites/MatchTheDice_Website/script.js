let currentScore = 0;
let playing = false;
let dice01;
let dice02;

const matchBtn = document.getElementById("matchButton");

const dices = [
    {image: "Images/Dice_one.png", width: 250, height: 160},
    {image: "Images/Dice_two.png", width: 250, height: 160},
    {image: "Images/Dice_three.png", width: 250, height: 160},
    {image: "Images/Dice_four.png", width: 250, height: 160},
    {image: "Images/Dice_five.png", width: 250, height: 160},
    {image: "Images/Dice_six.png", width: 250, height: 160},
];

const selectDice = () => {
    const randomNum = Math.floor(Math.random() * dices.length);
    const randomSelect = dices[randomNum];
    return randomSelect;
}

const RandomDice = () => {
    var myInterval = setInterval(() => {
        matchBtn.disabled = false;
        dice01 = selectDice();
        dice02 = selectDice();

        var dice01Image = document.getElementById("dice01-image").src= dice01.image;
        var dice02Image = document.getElementById("dice02-image").src= dice02.image;
        
    }, 1500);
}


document.getElementById("playButton").onclick = () => {
    playing = true;
    document.getElementById("playButton").disabled = true;
    RandomDice();
    ClearDice();

}

matchBtn.onclick = () => {
    var correct = document.getElementById("correctAudio");
    var incorrect = document.getElementById("wrongAudio");
    if (playing) {
        matchBtn.disabled = true;
        if (Object.is(dice01, dice02)) {
            currentScore++;
            document.getElementById("score").innerHTML = currentScore;
            correct.play();
            if (currentScore == 5)
            {
                alert("You win!!!");
                location.reload();
            }
        } else {
            currentScore--;
            document.getElementById("score").innerHTML = currentScore;
            incorrect.play();
        }
        
    }
}