const gameboard = {};

(function createGameboard() {
    for (let i = 1; i <= 8; i++) {
        let propertyname = "slot" + i;
        gameboard[propertyname] = "empty";
    }
})();

function Player(name, target) {
    this.name = name;
    this.target = target;
}

const pOne = new Player("James", "X");
const pTwo = new Player("Narumi", "O");

console.log(pOne.name);
console.log(gameboard);
