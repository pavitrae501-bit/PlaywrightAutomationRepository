// Write a program to display Even numbers from 40 to 80

function printEven(n,i) {
  if (n > i) return;

  console.log(n);
  printEven(n + 2, i);
}

printEven(40,80);

