const assert = require('assert');
const add = require('./add');

describe('Add parameters ', function() {
  const tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(({args, expected}) => {
    it(`correctly adds ${args.length} args`, function() {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});