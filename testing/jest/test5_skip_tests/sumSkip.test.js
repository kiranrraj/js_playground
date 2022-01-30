// A test can be skipped with 
// skip (test.skip) or 
// by using the x prefix (xtest)

const sum = require('./sumSkip');

xtest("Add 2 + 2 which is equals to 4", () => {
    expect(sum(2,2)).toBe(4);
});

xtest("Add 2 + 2 which is equals to 4", () => {
    expect(sum(2,2)).toEqual(4);
});

test.skip("Add 2 + 2 which is NOT equal to 5", () => {
    expect(sum(2,2)).not.toBe(5);
});

test.skip("Add 2 + 2 which is greater than 3", () => {
    expect(sum(2,2)).toBeGreaterThan(3);
});

test("Add 2 + 2 which is greater than or equal to 4", () => {
    expect(sum(2,2)).toBeGreaterThanOrEqual(4);
});

test("Add 2 + 2 which is less than 5", () => {
    expect(sum(2,2)).toBeLessThan(5);
});

test("Add 2 + 2 which is less than or equal to 3", () => {
    expect(sum(2,2)).toBeLessThanOrEqual(10);
});