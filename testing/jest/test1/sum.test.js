const sum = require('./sum');

test("Add 2 + 2 equals to 4", () => {
    expect(sum(2,2)).toBe(4);
});

test("Add 2 + 2 NOT equal to 5", () => {
    expect(sum(2,2)).not.toBe(5);
});