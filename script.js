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
const pTwo = createPlayer("Narumi", "O");

console.log(pOne.displayInfo());
console.log(pTwo.displayInfo());
console.log(gameboard);

function play(slotNum) {
    let xCount = 0;
    let oCount = 0;
    let slot = "slot" + slotNum;

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
    
    console.log(gameboard);
}
