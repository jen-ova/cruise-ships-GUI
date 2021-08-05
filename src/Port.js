class Port {
    constructor(name) {
        this.portName = name;
        this.ships = [];
    };

    addShip(ship) {
        this.ships.push(ship);
    };

    removeShip(ship) {
        

        if(this.ships.length !== 0) {
            this.ships.pop(ship)
        }
        // const removeShip = this.ships.indexOf(ship);
        // this.ships.splice(removeShip, 1)
    }
};


module.exports = Port;