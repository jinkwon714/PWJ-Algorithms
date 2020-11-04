//console.log("helloe world");

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

// console.log(yourAgeInSeconds(30));

function getFirstItem(items) {
    return items[0];
}

let movies = ["banana", "godfather", "shawshank", "pickle"];
// console.log(getFirstItem(movies))

// less than or equal to 7?
// bad movies
// good movies
// put them in 2 different buckets 

let movie_result;

function badOrGoodMovie(movie_rating) {
    if (movie_rating <= 6 ) {
        movie_result = "bad movie";
    } else {
        movie_result = "good movie";
    }
    return movie_result
}

console.log(badOrGoodMovie(6)); // bad 
console.log(badOrGoodMovie(7)); // good 
console.log(badOrGoodMovie(8)); // good 
console.log(badOrGoodMovie(2)); // bad
