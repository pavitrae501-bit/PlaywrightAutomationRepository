// Write function to display numbers in between 50 to 100 which are divisiable by 7?

// Traditional Function
function displayDivisibleBy7() {
  for (let i = 50; i <= 100; i++) {
    if (i % 7 == 0) {
      console.log(i);
    }
  }
}
displayDivisibleBy7();

console.log("----------------------------------");

// Anonymous Function
displayDivisibleBy7New = function() {
  for (let i = 50; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
};

displayDivisibleBy7New();

console.log("----------------------------------");

// Arrow Function
displayDivisibleBy7 = () => {
  for (let i = 50; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
};

displayDivisibleBy7();