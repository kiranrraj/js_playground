const msg = require('./funString');

console.log(msg());

test("Did the return statement has the world 'hello'", () => {
    expect(msg()).toMatch(/Hello World/);
});