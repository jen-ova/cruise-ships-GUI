(function exportPort() {
    class Port {
        constructor(name) {
            this.portName = name;
            this.ships = [];
        };

        addShip(ship) {
            this.ships.push(ship);
        };

        removeShip(ship) {
            const removeShip = this.ships.indexOf(ship);
            this.ships.splice(removeShip, 1)
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
      } else {
        window.Port = Port;
      }
}());