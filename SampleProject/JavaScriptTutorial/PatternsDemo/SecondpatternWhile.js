let pattern=""
let i=1;
while (i <= 5) {
    let j=1;
    while (j<=i) {
        pattern = pattern+j+" "
        j++;
    }
    pattern = pattern + "\n";
    i++;
}
console.log(pattern);

