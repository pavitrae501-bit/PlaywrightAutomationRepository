// Verify the largest number among given three input numbers

let a = 15;
let b = 25;
let c = 10;

if (a > b && a > c) {
    console.log("Largest is: " + a);
} else if (b > c) {
    console.log("Largest is: " + b);
} else {
    console.log("Largest is: " + c);
}