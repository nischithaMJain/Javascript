function checkLeapYear(year) {
    if (typeof year !== "number") return "Acceps only number"
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            if (year % 100 === 0) {
                return 'IT is a leap year'
            }
        }
    }
    return 'IT is not a leap year'
}
checkLeapYear(2003)
module.exports = checkLeapYear;
