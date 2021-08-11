/*
 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz */
 console.log('--------------------------------1---------------------------------------');
{
    function sumIprzNiza(mmm) {
        let noviniz = [];
        let zbir = 0;
        let prz = 1;
        for (let i = 0, j = 0; i < mmm.length; i++, j++) {
            zbir = zbir + mmm[i];
            prz = prz * mmm[j];
        }
        noviniz.push(zbir, prz);
        return noviniz;
    }

    let niz = [1, 2, 3, 4, 5];
    console.log(sumIprzNiza(niz));
}
console.log('--------------------------------2---------------------------------------');
/*
2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...*/
{
    function izbaciIzNiza(nekiniz) {
        let noviniz = [];
        for (const element of nekiniz) {
            if (Number.isNaN(element) == false && element != null && element != undefined && element != 0 && element != false && element != "") {
                noviniz.push(element)
            }
        }
        return noviniz;
    }
    let noviNiz = [true, 1, 2, 3, 'NaN', NaN, false, 'mjf'];
    console.log(izbaciIzNiza(noviNiz));
}
console.log('-----------------------------------4------------------------------------------');
/* 
4. За првих 100 бројева исписати:
 *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
 *       Ако је дељив са 3,5,7 - FizzBuzzZazz
 *       3,5 - FizzBuzz
 *       3,7 - FizzZazz
 *       5,7 - BuzzZazz */ 
{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 7 == 0 && i % 5 == 0) {
            console.log("FizzBuzzZazz");
        }       
        if (i % 3 == 0 && i % 7 != 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        if (i % 3 == 0 && i % 7 != 0 && i % 5 != 0) {
            console.log("Fizz");
        }        
        if (i % 3 != 0 && i % 7 != 0 && i % 5 == 0) {
            console.log("Buzz");
        }
        if (i % 3 != 0 && i % 7 == 0 && i % 5 != 0) {
            console.log("Zazz");
        }       
        if (i % 3 != 0 && i % 7 != 0 && i % 5 != 0) {
            console.log(i);
        }
    }
}
console.log('-------------------------------5------------------------------------------');
/* 5. Izvrsiti inverziju brojeva bez pomocne promenljive. 
 *      Pr: x = 5 y = 9
 *      Resenje: x = 9 y = 5
 *      pom = "ne mozete koristiti" */
{ 
let x = 5;
let y = 9;
x = x+y;
y = x-y;
x = x-y;
console.log(x,y);
}