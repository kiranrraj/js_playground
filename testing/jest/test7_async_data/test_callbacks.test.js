const addition = require('./test_callbacks')

test('add numbers', done => {
    addition(10, 5, result => {
      expect(result).toBe(15);
      done();
    })
  })