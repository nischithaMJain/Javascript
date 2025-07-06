describe('testing', () => {
    let checkLeapYear = require("../JSD6-LeapYear");

    test('test if it is a leap year', () => {
        expect(checkLeapYear(2000)).toBe("IT is a leap year");
    });
    test('test if it not a leap year', () => {
        expect(checkLeapYear(2003)).toBe("IT is not a leap year");
    });
    test('test if it is a leap year', () => {
        expect(checkLeapYear(2000)).toBe("IT is a leap year");
    });
});