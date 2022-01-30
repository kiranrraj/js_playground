const array = require('./returnArray');

test("Did the returned array has 'hello'", () => {
    expect(array()).toContain('hello');
});