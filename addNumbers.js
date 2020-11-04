console.log("helloe world");

function addNumbers(num1, num2) {
    return num1 + num2;
}

// console.log(addNumbers(4,7));
// console.log(addNumbers(6,5));
// console.log(addNumbers(10,7));


function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

//console.log(convertMinutesToSeconds(1))
//console.log(convertMinutesToSeconds(3))


function convertSecondsToMinutes(seconds) {
    return seconds / 60;
}
//console.log(convertSecondsToMinutes(60))

function yourAgeInSeconds(age) {
    // years * months(12) * days(30) * hours(24) *minutes(60) *seconds(60)
    return age * 12 * 30 * 24 * 60 * 60;
}

console.log(yourAgeInSeconds(30));