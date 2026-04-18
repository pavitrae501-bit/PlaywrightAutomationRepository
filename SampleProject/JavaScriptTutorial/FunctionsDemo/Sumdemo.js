
//Write a function to find sum of first 10 numbers? 

function sumofFirst10Numbers() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum =sum+i
  }
  return sum;
}
console.log("Sum of First Ten Numbers="+sumofFirst10Numbers());