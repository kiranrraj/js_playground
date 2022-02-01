const assert = require('chai').assert;
let str1 = "kiran";


describe("describe", () => {
    it("Chai Assert", () => {
        assert.typeOf(str1, 'string', 'The value must be of string type');
    })
})