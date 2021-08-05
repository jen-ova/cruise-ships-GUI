/* globals describe it expect */
const Ship = require('../src/Ship');

describe("constructor", () => {
    let balerion, qarth, itinerary;
    beforeEach(() => {
        qarth = {
            addShip: jest.fn(),
            name: "Qarth",
            ships: []
        };
        itinerary = {
            ports: [qarth]
        };
        balerion = new Ship("Balerion", itinerary);
    });

    it("can be instantiated", () => {
        expect(balerion).toBeInstanceOf(Ship); 
    });

    it("gets added to port on instantiation", () => {
        expect(qarth.addShip).toHaveBeenCalledWith(balerion);
        expect(qarth.addShip).toHaveBeenCalledTimes(1);
    }); 

    it("has a starting point", () => {
        expect(balerion.currentPort).toBe(qarth);
    });
});

describe("setSail", () => {
    let qarth, astapor, itinerary, balerion;
    beforeEach(() => {
        qarth = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Qarth",
            ships: []
        };
        astapor = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Astapor",
            ships: []
        };
        itinerary = {
            ports: [qarth, astapor]
        };
        balerion = new Ship("Balerion", itinerary);
    });

    it("can set sail", () => {
		balerion.setSail();

		expect(balerion.currentPort).toBeFalsy();
		expect(qarth.removeShip).toHaveBeenCalledWith(balerion);
        expect(qarth.removeShip).toHaveBeenCalledTimes(1);

    });

    it("can't set sail further than the last port on the itinerary", () => {
        balerion.setSail();
        balerion.dock();

        expect(() => balerion.setSail()).toThrowError("End of itinerary reached - the Unsullied are free!");
    });
});

describe("dock", () => {
    let qarth, astapor, itinerary, balerion;
    beforeEach(() => {
        qarth = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Qarth",
            ships: []
        };
        astapor = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Astapor",
            ships: []
        };
        itinerary = {
            ports: [qarth, astapor]
        };
        balerion = new Ship("Balerion", itinerary);
    });

    it("can dock at a different port", () => {
        balerion.setSail();
        balerion.dock();

        expect(balerion.currentPort).toBe(astapor);
        expect(astapor.addShip).toHaveBeenCalledWith(balerion);
        expect(astapor.addShip).toHaveBeenCalledTimes(1);

    });
});