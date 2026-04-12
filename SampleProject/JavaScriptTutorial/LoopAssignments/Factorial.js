//Write a program to display result of Factorial of a number
// n= n * (n-1)* (n-2)*.......1

//For loop
// num=5;
// fact=1;
// for(i=1;i<=num;i++)
// {
//     fact=fact*i;   
// }
// console.log("Factorial=",fact);

//While Loop
// num=5;
// fact=1;
// i=1;
// while (i<=num)
// {
//     fact=fact*i;
//     i++;
// } console.log("Factorial=",fact);

//Do-While Loop
num=5;
fact=1;
i=1;

do
{
    fact=fact*i;
    i++;
} while (i<=num);
console.log("Factorial=",fact);