let pattern = "";
let i = 1;

do {
    let j = 1;

    do {
        pattern = pattern + j + " ";
        j++;
    } while (j <= i);

    pattern = pattern + "\n";
    i++;
} while (i <= 5);

console.log(pattern);