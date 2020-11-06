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

// console.log(badOrGoodMovie(6)); // bad 
// console.log(badOrGoodMovie(7)); // good 
// console.log(badOrGoodMovie(8)); // good 
// console.log(badOrGoodMovie(2)); // bad

// check if a string is empty
function isEmptyString(some_string) {
    // isEmptyString("") -> True
    // isEmptyString("The Godfather") -> False
    if (some_string == ""){
        return "True";
    } else {
        return "False";
    }
}
// console.log(isEmptyString(""));
// console.log(isEmptyString("Halloween"));


// Logic for finding the minimum
// 1) Lable minimum
// 2) Loop through the array and check if current item is less than the current min
// 3) If true then replace the current min with the current item


function findMin(numbers) {
    // findMin([5,2,9,8,7,3]) -> 2
    // findMin([5,8,9,8,7,3]) -> 3
    let minimum = numbers [0];  // just label the first item to be the minimum
    for (let i = 0; i < numbers.length; i++) {   //Loop by using for function
        if (numbers[i] < minimum) {      //numbers[i] means the current number, i = index
            minimum = numbers[i];
        }
    }
    return minimum;
}

// console.log(findMin([5,2,9,8,7,3]));
// console.log(findMin([5,8,9,8,7,3]));


function findMax(numbers) {
    // findMax([5,2,9,8,7,3]) -> 9
    // findMax([5,8,9,8,7,3]) -> 9
   let maximum = numbers [0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbersp[i] > maximum) { 
            maximum = numbers[i];
        }
    }
    return maximum;
}

// Logics
// numbers[0] --> 5
// 5 vs 5 --> false --> stay 5
// numbers[1] --> 2
// 5 vs 2 --> false --> stay 5 
// numbers[2] --> 9
// 5 vs 9 --> true --> change 9


// console.log(findMax([5,2,9,8,7,3]));
// console.log(findMax([5,8,9,8,7,3]));



// sort IMDB rating 
// How does it work? 
// [5, 8, 2, 9, 3, 10]
// 1) Start my look at index1 
// 2) find max from remaing list and know it's location
// 3) swap  
// run length -1 time 

function sortBestRatingsFirst(numbers) {
// sortBestRatingsFirst[5, 8, 2, 9, 3, 10]
// Know max AND it's index 

// find max also need to know the location of it
    
    for (let j = 0; j < numbers.length -1; j++){

        let max_num = numbers[j];
        let max_location = j;

        for (let i = j; i < numbers.length; i++){
            if (numbers[i] > max_num){
                max_num = numbers[i];
                max_location = i;
            }
        }
        // swap the first and the last
        numbers[max_location] = numbers[j] // --> 10 replace the 10 and 5 locations 
        numbers[j] = max_num; // actually replace the numbers 10 and 5
    }
    return numbers; // numbers would return the whole array
}

// console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]));
// console.log(sortBestRatingsFirst([9, 8, 1, 12, 3, 10]));
// console.log(sortBestRatingsFirst([5, 9, 8, 1, 12, 3, 10]));


function findMaxHelper(numbers, start) {   // start index: it could assign where to start from a specific index
    let maximum = numbers [start];
    let max_location = start;

    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) { 
            maximum = numbers[i];
            max_location = i;  // Need to make this line for using it into sortBestWithHelper
        }
    }
    return {max_number: maximum, max_index: max_location} // dictionary to use it inside of sortBestWithHelper
}

// console.log(findMaxHelper([5, 2, 9, 3, 7], 3)) // becasue of start index, we can give it a starting point of index

function sortBestWithHelper(numbers) {
        // run as many times as there are items
        for (let j = 0; j < numbers.length -1; j++){
            
            //find max number and max location starting from j
            max = findMaxHelper(numbers, j)
            max_num = max['max_number'];
            max_location = max['max_index'];

            // swap the first and the max item in an array 
            numbers[max_location] = numbers[j] 
            numbers[j] = max_num; 
        }
        return numbers; 
    }

console.log(sortBestWithHelper([5, 8, 2, 9, 3, 10]));
console.log(sortBestWithHelper([9, 8, 1, 12, 3, 10]));
console.log(sortBestWithHelper([5, 9, 8, 1, 12, 3, 10]));