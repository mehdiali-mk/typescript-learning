function twoFer(personName = "you") {
    return `One for ${personName}, one for me`;
}
console.log(twoFer());
console.log(twoFer("Mehdiali"));
function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
export {};
