const functions = require('./truthy');

test('is the return value true', () => {
    expect(functions.isTrue()).toBeTruthy(),
    expect(functions.isTrue()).not.toBeFalsy();
});


test('is the return value false', () => {
    expect(functions.isFalse()).toBeFalsy(),
    expect(functions.isFalse()).not.toBeTruthy();
});

test('is the return value undefined', () => {
    expect(functions.isUndefined()).toBeUndefined(),
    expect(functions.isUndefined()).not.toBeDefined();
});


test('is the return value not undefined', () => {
    expect(functions.isDefined()).not.toBeUndefined(),
    expect(functions.isDefined()).toBeDefined();
});

test('is the return value null', () => {
    expect(functions.isNull()).toBeNull();
    // expect(functions.isNull()).not.toBeNull();
});