const Port = require('../src/Port');

describe("constructor", () => {
    let astapor;
    beforeEach(() => {
        astapor = new Port("Astapor");
    });

    it("returns an object", () => {
        expect(astapor).toBeInstanceOf(Port);
    });

    it("checks the port has a name", () => {
        expect(astapor.portName).toBe("Astapor");
    });
});

describe("adding and removing ships", () => {
    let qarth, balerion, vhagar, meraxes;
    beforeEach(() => {
        qarth = new Port("Qarth");
        balerion = jest.fn();
        vhagar = jest.fn();
        meraxes = jest.fn();
    });

    it("can add a ship", () => {
        qarth.addShip(balerion);

        expect(qarth.ships).toContain(balerion);
    });

    it("can remove a ship", () => {
        qarth.addShip(balerion);
        qarth.addShip(vhagar);
        qarth.addShip(meraxes);
        qarth.removeShip(meraxes);

        expect(qarth.ships).toEqual([balerion, vhagar]);

    })
});