const gameboard = {};

(function createGameboard() {
    for (let i = 1; i <= 9; i++) {
        let propertyname = "slot" + i;
        gameboard[propertyname] = "empty";
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
console.log(gameboard);

function play(slotNum) {
    let xCount = 0;
    let oCount = 0;
    let slot = "slot" + slotNum;

    if (slot != "empty") {
        console.log("You can't play that slot!");
    } else {
        for (spot in gameboard) {
            if (gameboard[spot] === "X") {
                xCount++;
            } else if (gameboard[spot] === "O") {
                oCount++;
            }
        }

        if (xCount > oCount) {
            gameboard[slot] = pTwo.target;
        } else {
            gameboard[slot] = pOne.target;
        }
    }
    
    console.log(gameboard);
}

function winLose() {
    const winConditions = {
        win1: (gameboard.slot1 + gameboard.slot2 + gameboard.slot3),
        win2: (gameboard.slot4 + gameboard.slot5 + gameboard.slot6),
        win3: (gameboard.slot7 + gameboard.slot8 + gameboard.slot9),
        win4: (gameboard.slot1 + gameboard.slot4 + gameboard.slot7),
        win5: (gameboard.slot2 + gameboard.slot5 + gameboard.slot8),
        win6: (gameboard.slot3 + gameboard.slot6 + gameboard.slot9),
        win7: (gameboard.slot1 + gameboard.slot5 + gameboard.slot9),
        win8: (gameboard.slot3 + gameboard.slot5 + gameboard.slot7)
    };

    for (condition in winConditions) {
        if (condition === "XXX") {
            console.log(pOne.name + "wins!");
        } else if (condition === "OOO") {
            console.log(pTwo.name + "wins!");
        }
    }
}