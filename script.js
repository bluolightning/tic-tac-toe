const gameboard = {};

// Create the gameboard
(function createGameboard() {
    for (let i = 1; i <= 9; i++) {
        let propertyname = "slot" + i;
        gameboard[propertyname] = "empty";

        let div = document.createElement("div");
        document.querySelector(".container").appendChild(div);
        div.setAttribute("class", propertyname)

        div.addEventListener("click", function () {
            play(propertyname);
        });
    }
})();

// Selects a gameboard spot
function play(slot) {
    let xCount = 0;
    let oCount = 0;

    if (gameboard[slot] != "empty") {
        console.log("You can't play that slot!");
    } else {
        for (spot in gameboard) {
            if (gameboard[spot] === "X") {
                xCount++;
            } else if (gameboard[spot] === "O") {
                oCount++;
            }
        }

        const slotSelector = document.querySelector(`.${slot}`);
        const currentPlayer = document.querySelector(".currentPlayer");
        if (xCount > oCount) {
            gameboard[slot] = pTwo.target;
            slotSelector.classList.add("oSelect");
            slotSelector.textContent = "O";
            currentPlayer.textContent = "X";
        } else {
            gameboard[slot] = pOne.target;
            slotSelector.classList.add("xSelect");
            slotSelector.textContent = "X";
            currentPlayer.textContent = "O";
        }

        winLose();
    }
}

// Decides if a player has won
function winLose() {
    const winConditions = [
        (gameboard.slot1 + gameboard.slot2 + gameboard.slot3),
        (gameboard.slot4 + gameboard.slot5 + gameboard.slot6),
        (gameboard.slot7 + gameboard.slot8 + gameboard.slot9),
        (gameboard.slot1 + gameboard.slot4 + gameboard.slot7),
        (gameboard.slot2 + gameboard.slot5 + gameboard.slot8),
        (gameboard.slot3 + gameboard.slot6 + gameboard.slot9),
        (gameboard.slot1 + gameboard.slot5 + gameboard.slot9),
        (gameboard.slot3 + gameboard.slot5 + gameboard.slot7)
    ]

    const winLabel = document.querySelector(".winLabel");
    let xScore = document.querySelector(".xScore");
    let oScore = document.querySelector(".oScore");
    let resetButton = document.querySelector(".reset");

    for (let condition of winConditions) {
        if (condition === "XXX") {
            winLabel.textContent = pOne.name + " wins!";
            if (xScore.textContent === "X") {
                xScore.textContent = "1";
            } else {
                let score = Number(xScore.textContent);
                score++
                xScore.textContent = score;
            }
            resetButton.click();
        } else if (condition === "OOO") {
            winLabel.textContent = pTwo.name + " wins!";
            if (oScore.textContent === "O") {
                oScore.textContent = "1";
            } else {
                let score = Number(oScore.textContent);
                score++
                oScore.textContent = score;
            }
            resetButton.click();
        }
    }
}

document.querySelector(".reset").addEventListener("click", function () {
    for (let i = 1; i <= 9; i++) {
        let slot = "slot" + i;
        const slotSelector = document.querySelector(`.${slot}`);

        gameboard[slot] = "empty";
        slotSelector.classList.remove("oSelect");
        slotSelector.classList.remove("xSelect");
        slotSelector.textContent = "";
        document.querySelector(".winLabel").textContent = "";
        document.querySelector(".currentPlayer").textContent = "X";
    }
});

// Create players
function createPlayer(name, target) {
    return {
        name,
        target,
        displayInfo() {
            return `${name} plays as ${target}!`;
        }
    }
}

let pOne;
let pTwo;

document.querySelector(".submit").addEventListener("click", function(event) {
    event.preventDefault();
    xName = document.getElementById("playerX").value;
    oName = document.getElementById("playerO").value;

    pOne = createPlayer(xName, "X");
    pTwo = createPlayer(oName, "O");

    console.log(pOne.displayInfo());
    console.log(pTwo.displayInfo());

});