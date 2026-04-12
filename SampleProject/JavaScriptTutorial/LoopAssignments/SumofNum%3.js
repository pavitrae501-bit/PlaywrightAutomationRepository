//Write a program to find sum of numbers in between 1 to 500 which are divisible by 3

//For Loop
// sum=0;
// for(i=1;i<=500;i++)
// {
//     if(i%3==0)
//     {
//     sum=sum + i;
//     }
// } console.log("Sum of Number Divisible by 3=",sum);

//While Loop
// sum=0;
// i=1;
// while (i<=500)
// {
//     if(i%3==0) 
//     {
//        sum=sum + i; 
//     }
//     i++;
// } 
// console.log("Sum of Number Divisible by 3=",sum);

//Do-While Loop
sum=0;
i=1;
do
{
    if(i%3==0) 
    {
       sum=sum + i; 
    }
    i++;
} while (i<=500);
console.log("Sum of Number Divisible by 3=",sum);