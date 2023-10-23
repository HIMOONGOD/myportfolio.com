const ageTag = document.getElementById("age");

// for counting my age
let bornDay = Date.parse("2003-09");
let toDay = Date.now();
let myAgemi = toDay - bornDay;

function millisecondsToYears(milliseconds) {
    var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    let age =  milliseconds / millisecondsInYear;
    return parseInt(age);
}

let myAge = millisecondsToYears(myAgemi);

console.log(myAge)
ageTag.innerHTML = myAge;