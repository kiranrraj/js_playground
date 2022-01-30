

const arithmetic = require('./arithmetic');

test.each([[5,6,11], [10, 11, 21], [15, 17, 32]])(
    `%i + %i equals %i`, (x,y,expected) => {
        expect(arithmetic.add(x,y)).toBe(expected);
    }
)

test.each([[5,6,-1], [10, 4, 6], [15, 7, 8]])(
    `%i - %i equals %i`, (x,y,expected) => {
        expect(arithmetic.subtract(x,y)).toBe(expected);
    }
)

test.each([[5,2,10], [10, 4, 40], [5, 5, 35]])(
    `%i - %i equals %i`, (x,y,expected) => {
        expect(arithmetic.multiply(x,y)).toBe(expected);
    }
)

test.each([[15,5,3], [10, 2, 5], [15, 7, 8]])(
    `%i - %i equals %i`, (x,y,expected) => {
        expect(arithmetic.divide (x,y)).toBe(expected);
    }
)


