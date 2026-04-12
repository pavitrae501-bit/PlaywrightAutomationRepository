//Write a program to find the count of Even and odd numbers in between 1 to 1000

//For Loop
// evenCount = 0;
// oddCount = 0;
// for (i = 1; i <= 1000; i++) 
//     {
//     if (i % 2 === 0) 
//         {
//         evenCount++;
//         } 
//     else {
//         oddCount++;
//         }
// }
// console.log("Even count:", evenCount);
// console.log("Odd count:", oddCount);


//While Loop
// evenCount = 0;
// oddCount = 0;
// i = 1;
// while(i <= 1000) 
//     {
//     if (i % 2 === 0) 
//         {
//         evenCount++;
//         } 
//     else {
//         oddCount++;
//         }
//     i++;
// }
// console.log("Even count:", evenCount);
// console.log("Odd count:", oddCount);

//Do-While Loop
evenCount = 0;
oddCount = 0;
i = 1;
do
    {
    if (i % 2 === 0) 
        {
        evenCount++;
        } 
    else {
        oddCount++;
        }
    i++;
}while(i <= 1000) ;
console.log("Even count:", evenCount);
console.log("Odd count:", oddCount);