//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
{
    function deljiviSa5(niz) {
        for (const br of niz) {
            if (br % 5 == 0) {
                console.log(br);
            }
        }
    }
    let randomBr = [1, 2, 3, 5, 10, 15, 16];
    deljiviSa5(randomBr);

}

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)
//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

let pokemon1 = {
    ime: "Heracross",
    sposobnosti: ["sps1", "sps2", "sps3"],
    karakteristike: {
        napad: 25,
        odbrana: 15,
        brzina: 100
    }
}
let pokemon2 = {
    ime: "Bulbasaur",
    sposobnosti: ["sps4", "sps5", "sps6"],
    karakteristike: {
        napad: 15,
        odbrana: 85,
        brzina: 170
    }
}
let pokemon3 = {
    ime: "Charmander",
    sposobnosti: ["sps7", "sps8", "sps9"],
    karakteristike: {
        napad: 78,
        odbrana: 5,
        brzina: 70
    }
}
let pokemon4 = {
    ime: "Onyx",
    sposobnosti: ["sps10", "sps11", "sps12"],
    karakteristike: {
        napad: 44,
        odbrana: 32,
        brzina: 210
    }
}
let sviPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function sposobnostiPokemona(niz) {
    let noviniz = [];
    for (const pok of niz) {
        for (let i = 0; i < pok.sposobnosti.length; i++) {
            noviniz.push(pok.sposobnosti[i]);
        }
    }
    return noviniz;
}
let spsPokemona = sposobnostiPokemona(sviPokemoni);
console.log(spsPokemona);




////////////////////////////////////////////ZA PETAK////////////////////////////////////
//4. Sortirati pokemone po brzini, rastuće.

function poredjenje(a, b) {
    if (a.karakteristike.brzina < b.karakteristike.brzina) {
        return -2
    }
    if (a.karakteristike.brzina > b.karakteristike.brzina) {
        return 2
    }
    if (a.karakteristike.brzina == b.karakteristike.brzina) {
        return 0
    }
}
sviPokemoni.sort(poredjenje)
console.log(sviPokemoni);

//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

function pobednik(niz) {
    let winner = niz[0]
    for (let i = 0; i < niz.length; i++) {
        if (winner.karakteristike.napad < niz[i].karakteristike.napad) {
            winner = niz[i]
        }
    }
    return winner
}
console.log(pobednik(sviPokemoni));