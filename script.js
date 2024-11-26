const gameboard = {};

// Create the gameboard
(function createGameboard() {
    for (let i = 1; i <= 9; i++) {
        let propertyname = "slot" + i;
        gameboard[propertyname] = "empty";

        let div = document.createElement("div");
        document.querySelector(".container").appendChild(div);
        div.className = propertyname;
        div.setAttribute("class", propertyname)

        div.addEventListener("click", function () {
            let slotNum = div.getAttribute("class").replace("slot", "");
            play(slotNum);
        });
    }


    
})();

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

function play(slotNum) {
    let xCount = 0;
    let oCount = 0;
    let slot = "slot" + slotNum;

    if (slot === "empty") {
        console.log("You can't play that slot!");
    } else {
        for (spot in gameboard) {
            if (gameboard[spot] === "X") {
                xCount++;
                document.querySelector(`.${spot}`).classList.add("xSelect");
            } else if (gameboard[spot] === "O") {
                oCount++;
                document.querySelector(`.${spot}`).classList.add("oSelect");
            }
        }

        if (xCount > oCount) {
            gameboard[slot] = pTwo.target;
            
        } else {
            gameboard[slot] = pOne.target;
        }
    }
    
    winLose();
}

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

    for (let condition of winConditions) {
        if (condition === "XXX") {
            console.log(pOne.name + "wins!");
        } else if (condition === "OOO") {
            console.log(pTwo.name + "wins!");
        }
    }
}


