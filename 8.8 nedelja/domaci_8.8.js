/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/
let n = 4;

for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i + 1) + "*".repeat(2 * i + 1));
}

console.log(" " + "*".repeat(2 * n + 1));

for (let i = 0; i < n; i++) {
    console.log(" ".repeat(i + 2) + "*".repeat(2 * n - 2 * i - 1));
}

