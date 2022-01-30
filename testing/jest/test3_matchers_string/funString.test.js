const msg = require('./funString');

test("Did the return statement has the world 'hello'", () => {
    expect(msg()).toMatch(/Hello World/);
});