const gameboard = {};


(function createGameboard() {
    for (let i = 1; i <= 8; i++) {
        let propertyname = "slot" + i;
        gameboard[propertyname] = "empty";
    }
})();


console.log(gameboard);
