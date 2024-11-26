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

const pOne = createPlayer("James", "X");
const pTwo = createPlayer("Bob", "O");

console.log(pOne.displayInfo());
console.log(pTwo.displayInfo());

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
    let xScore = 0;
    let oScore = 0;

    for (let condition of winConditions) {
        if (condition === "XXX") {
            winLabel.textContent = pOne.name + " wins!";
            xScore++;
            document.querySelector(".xScore").textContent = xScore;
        } else if (condition === "OOO") {
            winLabel.textContent = pTwo.name + " wins!";
            oScore++;
            document.querySelector(".oScore").textContent = oScore;
        }
    }
}


