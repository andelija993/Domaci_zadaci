let popuni = document.getElementById("inputi")
let tabela=document.getElementById("tabela")

let sekcija = document.createElement("section")
popuni.appendChild(sekcija)

let inputIme = document.createElement("input")
inputIme.type="text"
inputIme.id="ime"
inputIme.placeholder="Unesi ime"

let inputPrezime = document.createElement("input")
inputPrezime.type="text"
inputPrezime.id="prezime"
inputPrezime.placeholder ="Unesi prezime"

let inputGodine = document.createElement("input")
inputGodine.type="text"
inputGodine.id="godine"
inputGodine.placeholder="Unesite godine"

sekcija.append(inputIme, inputPrezime, inputGodine)

let btn=document.createElement("button")
btn.textContent="DODAJ"
popuni.appendChild(btn)

btn.addEventListener("click", (event)=>{
    let tr =document.createElement("tr")
    tabela.appendChild(tr)
    let tdime=document.createElement("td")
    tdime.textContent=inputIme.value
    let tdPrezime=document.createElement("td")
    tdPrezime.textContent=inputPrezime.value
    let tdGodine=document.createElement("td")
    tdGodine.textContent=inputGodine.value
    /*let btnD = document.createElement("button")
    btnD.textContent="obrisi"
    let brisanje = tr
    btnD.addEventListener("click", (event)=>{
        brisanje.remove()
    })*/
    tr.append(tdime, tdPrezime, tdGodine)
    
    inputIme.value=""
    inputPrezime.value=""
    inputGodine.value=""
})

