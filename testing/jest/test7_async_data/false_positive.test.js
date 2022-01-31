// The test completes early, and the expectation will run sometime in the 
// future when the test has already been marked as passed

const returnFalse = require('./false_positive');

test("this will pass", () => {
    // Normally this should fail as returnFalse() returns false
    expect(returnFalse()).toBe(undefined);
});
