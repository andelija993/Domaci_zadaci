
function palindrom(a) {
    let maxp = ""
    for (j = a.length - 1; j != 0; j--) {
        for (i = 0; i <= j; i++) {
            if (a[i] == a[j]) {
                let b = a.substring(i, j + 1)
                if (b == b.split("").reverse().join("")) {
                    if (maxp.length < b.length) {
                        maxp = b;
                    }
                }
            }
        }
    }
    return maxp;
}
let pl = "asddasjanavolimilovanads";
let p2 = "tyfg12344321fdqw"
console.log(palindrom(pl));
console.log(palindrom(p2));