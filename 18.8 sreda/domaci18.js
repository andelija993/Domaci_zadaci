//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.

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


//funkcija koja mi izvlaci karakteristike pokemona
function f(pokemon, div, id) {
    if (document.getElementById(id) != null) {
        document.getElementById(id).remove()
    }
    let p = document.createElement("p")
    p.id = id
    p.textContent = "Napad: " + pokemon.karakteristike.napad + "\n Odbrana: " + pokemon.karakteristike.odbrana + "\n Brzina: " + pokemon.karakteristike.brzina
    document.getElementById(div).appendChild(p)
}
//dugme izaberi pokemona
let prvi = document.getElementById("1")
prvi.addEventListener("click", (event) => {
    console.log(event);
    prvi.remove();
    let noviniz = []
    for (let i = 0; i < sviPokemoni.length; i++) {
        let btn = document.createElement("button")
        btn.textContent = sviPokemoni[i].ime
        document.getElementById("div1").appendChild(btn)
        noviniz.push(btn)
    }
    for (let i = 0; i < noviniz.length; i++) {
        noviniz[i].addEventListener("click", function () {
            f(sviPokemoni[i], "div1", "paragraf1")
        })
    }
})

//dugme izaberi protivnika
let drugi = document.getElementById("2")
drugi.addEventListener("click", (event) => {
    console.log(event);
    drugi.remove();
    let noviniz = []
    for (let i = 0; i < sviPokemoni.length; i++) {
        let btn = document.createElement("button")
        btn.textContent = sviPokemoni[i].ime
        document.getElementById("div2").appendChild(btn)
        noviniz.push(btn)
    }
    for (let i = 0; i < noviniz.length; i++) {
        noviniz[i].addEventListener("click", function () {
            f(sviPokemoni[i], "div2", "paragraf2")
        })
    }
})

