//SA CASA DOMACI

//1.1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu

let kolGram = 500;
let cenaDin = 800;
let racun = (kolGram * cenaDin) / 1000;
console.log("Vas racun je: " + racun + " dinara.");

//2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)
let kolNovca = 200;

if (kolNovca >= racun) {
    let kusur = kolNovca - racun;
    console.log("Vas kusur je: " + kusur + " dinara.");//Ja sam ispisala kusur koji ostane jer sam racun vec izracunala u prethodnom zadatku.
}
else {
    console.log("Nemate dovoljno novca da biste platili proizvod!");
}