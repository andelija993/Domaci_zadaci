//Zadatak 1

let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"

//1. Proveriti koji je string najduzi i ispisati samo njega

{
    if (string1.length > string2.length && string1.length > string3.length && string1.length > string4.length) {
        console.log(string1);
    }
    else if (string2.length > string1.length && string2.length > string3.length && string2.length > string4.length) {
        console.log(string2);
    }
    else if (string3.length > string1.length && string3.length > string2.length && string3.length > string4.length) {
        console.log(string3);
    }
    else {
        console.log(string4);
    }
}

//2. Ispisati najkraci string koji sadrzi rec "string"
{
    let prviS = false
    let drugiS = false
    let treciS = false
    let cetvrtiS = false
    if (string1.includes("string")) {
        prviS = true
    }
    if (string2.includes("string")) {
        drugiS = true
    }
    if (string3.includes("string")) {
        treciS = true
    }
    if (string4.includes("string")) {
        cetvrtiS = true
    }

    if (prviS == true && drugiS == true && treciS == true && cetvrtiS == true) {
        if (string1.length < string2.length && string1.length < string3.length && string1.length < string4.length) {
            console.log(string1)
        }
        else if (string2.length < string1.length && string2.length < string3.length && string2.length < string4.length) {
            console.log(string2)
        }
        else if (string3.length < string1.length && string3.length < string2.length && string3.length < string4.length) {
            console.log(string3);
        }
        else {
            console.log(string4);
        }

    }
    else if (prviS == false && drugiS == true && treciS == true && cetvrtiS == true) {
        if (string2.length < string3.length && string2.length < string4.length) {
            console.log(string2);
        }
        else if (string3.length < string2.length && string3.length < string4.length) {
            console.log(string3);
        }
        else {
            console.log(string4)
        }
    }
    else if (prviS == false && drugiS == false && treciS == true && cetvrtiS == true) {
        if (string3.length < string4.length) {
            console.log(string3);
        }
        else {
            console.log(string4)
        }
    }
    else if (prviS == false && drugiS == false && treciS == false && cetvrtiS == true) {
        console.log(string4)

    }
    else if (prviS == true && drugiS == false && treciS == true && cetvrtiS == true) {
        if (string1.length < string3.length && string1.length < string4.length) {
            console.log(string1)
        }
        else if (string3.length < string1.length && string3.length < string4.length) {
            console.log(string3);
        }
        else {
            console.log(string4);
        }
    }
    else if (prviS == true && drugiS == false && treciS == false && cetvrtiS == true) {
        if (string1.length < string4.length) {
            console.log(string1);
        }
        else {
            console.log(string4);
        }
    }
    else if (prviS == true && drugiS == false && treciS == false && cetvrtiS == false) {
        console.log(string1);
    }
    else if (prviS == true && drugiS == true && treciS == false && cetvrtiS == true) {
        if (string1.length < string2.length && string1.length < string4.length) {
            console.log(string1);
        }
        else if (string2.length < string1.length && string2.length < string4.length) {
            console.log(string2);
        }
        else {
            console.log(string4)
        }
    }
    else if (prviS == true && drugiS == true && treciS == false && cetvrtiS == false) {
        if (string1.length < string2.length) {
            console.log(string1);
        }
        else {
            console.log(string2)
        }
    }
    else if (prviS == true && drugiS == true && treciS == true && cetvrtiS == false)
        if (string1.length < string2.length && string1.length < string3.length) {
            console.log(string1);
        }
        else if (string2.length < string1.length && string2.length < string3.length) {
            console.log(string2);
        }
        else {
            console.log(string3)
        }
    else if (prviS == true && drugiS == false && treciS == true && cetvrtiS == false) {
        if (string1.length < string3.length) {
            console.log(string1);
        }
        else {
            console.log(string3)
        }
    }
    else if (prviS == false && drugiS == true && treciS == false && cetvrtiS == true) {
        if (string2.length < string4.length) {
            console.log(string2);
        }
        else {
            console.log(string4)
        }
    }
    else if (prviS == false && drugiS == true && treciS == true && cetvrtiS == false) {
        if (string2.length < string3.length) {
            console.log(string2);
        }
        else {
            console.log(string3)
        }
    }
    else if (prviS == false && drugiS == true && treciS == false && cetvrtiS == false) {
        console.log(string2);
    }
    else if (prviS == false && drugiS == false && treciS == true && cetvrtiS == false) {
        console.log(string3);
    }
    else if (prviS == false && drugiS == false && treciS == false && cetvrtiS == false) {
        console.log("Nijedan string ne sadrži traženu reč. Ne moeže se izračunati min.")
    }

}

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti
{

    let sadrzi1 = true
    let sadrzi2 = true
    let sadrzi3 = true
    let sadrzi4 = true
    
    if (string1.includes("string koji je")) {
        sadrzi1 = false
    }
    if (string2.includes("string koji je")) {
        sadrzi2 = false
    }
    if (string3.includes("string koji je")) {
        sadrzi3 = false
    }
    if (string4.includes("string koji je")) {
        sadrzi4 = false
    }

    let rezultat = ""

    if (sadrzi1 == true) {
        rezultat = rezultat + string1.substring(5)
    }
    if (sadrzi2 == true) {
        rezultat = rezultat + string2.substring(5)
    }
    if (sadrzi3 == true) {
        rezultat = rezultat + string3.substring(5)
    }
    if (sadrzi4 == true) {
        rezultat = rezultat + string4.substring(5)
    }
    console.log(rezultat)

}