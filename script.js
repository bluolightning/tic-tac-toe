const gameboard = {};

(function createGameboard() {
    for (let i = 1; i <= 8; i++) {
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
