//1. Puz se penje uz drvo odredjenom brzinom...


let visDrveta = 100; //cm
let brP = 51; //cm po danu
let pocetnoRastojanje = 0; //cm
let brDan = 0;
while (pocetnoRastojanje < visDrveta) {
    visDrveta++
    pocetnoRastojanje = pocetnoRastojanje + brP
    console.log("Puž je prešao " + pocetnoRastojanje + "cm, visina drveta je " + visDrveta);
    brDan++
}
console.log("Puž se popeo na drvo za " + brDan + " dana");

// 2. Izračunati popust...

let kupac = "zaposleni";
let racun = 10000 //dinara ;
let danUnedelji = "nedelja";
let racunSaPopustom
let vikendA
switch (kupac) {
    case "zaposleni":
        if (racun > 5000) {
            console.log("Ostvarili ste popust. Vaš račun je: " + (racun - (racun * 5 / 100)) + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                racunSaPopustom = racun - (racun * 5 / 100);
                vikendA = racunSaPopustom - (racunSaPopustom * 5 / 100);
                console.log("Na ostvareni popust imate jos dodatnih 5% jer je u toku vikend akcija. Vaš konačni račun je: " + vikendA + "dinara.");
            }
        }

        else {
            console.log("Vaš račun je: " + racun + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                console.log("U toku je vikend akcija. Ostvarili ste 5% popusta na kupovinu. Vaš račun je: " + (racun - (racun * 5 / 100)) + "dinara.");
            }

        }
        break;

    case "student":
        if (racun > 3000) {
            console.log("Ostvarili ste popust. Vaš račun je: " + (racun - (racun * 20 / 100)) + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                racunSaPopustom = racun - (racun * 20 / 100);
                vikendA = racunSaPopustom - (racunSaPopustom * 20 / 100);
                console.log("Na ostvareni popust imate jos dodatnih 5% jer je u toku vikend akcija. Vaš konačni račun je: " + vikendA + "dinara.");
            }
        }

        else {
            console.log("Vaš račun je: " + racun + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                console.log("U toku je vikend akcija. Ostvarili ste 5% popusta na kupovinu. Vaš račun je: " + (racun - (racun * 5 / 100)) + "dinara.");
            }

        }
        break;


    case "penzioner":
        if (racun > 2000) {
            console.log("Ostvarili ste popust. Vaš račun je: " + (racun - (racun * 30 / 100)) + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                racunSaPopustom = racun - (racun * 30 / 100);
                vikendA = racunSaPopustom - (racunSaPopustom * 5 / 100);
                console.log("Na ostvareni popust imate jos dodatnih 5% jer je u toku vikend akcija. Vaš konačni račun je: " + vikendA + "dinara.");
            }
        }

        else {
            console.log("Vaš račun je: " + racun);

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                console.log("U toku je vikend akcija. Ostvarili ste 5% popusta na kupovinu. Vaš račun je: " + (racun - (racun * 5 / 100)) + "dinara.");
            }

        }
        break;
    case ("firma"):
        if (racun > 10000) {
            console.log("Ostvarili ste popust. Vaš račun je: " + (racun - (racun * 10 / 100)) + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                racunSaPopustom = racun - (racun * 10 / 100);
                vikendA = racunSaPopustom - (racunSaPopustom * 5 / 100);
                console.log("Na ostvareni popust imate jos dodatnih 5% jer je u toku vikend akcija. Vaš konačni račun je: " + vikendA + "dinara.");
            }
        }

        else {
            console.log("Vaš račun je: " + racun + "dinara.");

            if (danUnedelji == "subota" || danUnedelji == "nedelja") {
                console.log("U toku je vikend akcija. Ostvarili ste 5% popusta na kupovinu. Vaš račun je: " + (racun - (racun * 5 / 100)) + "dinara.")
            }

        }
        break;

    default:
        console.log("Vaš račun je: " + racun + "dinara.");

        if (danUnedelji == "subota" || danUnedelji == "nedelja") {
            console.log("U toku je vikend akcija. Ostvarili ste 5% popusta na kupovinu. Vaš račun je: " + (racun - (racun * 5 / 100)) + "dinara.");
        }
        break;
}
