const arithmetic = require('./arithmeticOperations2');

describe("Arithmetic Operation Testing", () => {

    beforeEach(() => {
        console.log(`Before Each Hooks called.`);
    });

    afterEach(() => {
        x = 20, y = 10;
        console.log("After Each Hooks called");
    });

    test("Addition", () => {
        x = 5, y = 10;
        expect(arithmetic.add(x,y)).toBe(15);
    });

    test("Subtraction", () => {
        expect(arithmetic.subtract(x,y)).toBe(10);
    });

    test("Multiply", () => {
        expect(arithmetic.multiply(x,y)).toBe(200);
    });

    test("Division", () => {
        expect(arithmetic.divide(x,y)).toBe(2);
    });
})