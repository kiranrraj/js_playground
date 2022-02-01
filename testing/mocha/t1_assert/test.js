const assert = require('assert');

describe('Array', () => {
    it('Should return -1 if 4 is not in the array', () => {
        assert.equal([1,2,3].indexOf(4), -1);
    });

    it('Should return -1 if 4 is not in the array', () => {
        assert.equal([1,2,3].indexOf(1), -1);
    });
})