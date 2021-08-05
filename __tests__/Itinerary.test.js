const Itinerary = require('../src/Itinerary');

describe("constructor", () => {
    let qarth, astapor, itinerary;
    beforeEach(() => {
        qarth = jest.fn();
        astapor = jest.fn();
        itinerary = new Itinerary([qarth, astapor]);
    });

    it("returns an object", () => {
        expect(itinerary).toBeInstanceOf(Itinerary);
    });

    it("can have ports", () => {
        expect(itinerary.ports).toEqual([qarth, astapor]);
    });
});