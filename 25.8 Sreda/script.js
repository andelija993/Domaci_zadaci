// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!

let name = document.getElementById("name")
let surname = document.getElementById("surname")
let password = document.getElementById("password")
let passwordConfirm = document.getElementById("confirmpass")
let city = document.getElementById("city")
let nameerror = document.getElementById("nameerror")
let surnameerror = document.getElementById("surnameerror")
let passworderror = document.getElementById("passworderror")
let passerrorcon = document.getElementById("passworderrorcon")
let checkjs = document.getElementById("js")
let checkhtml = document.getElementById("html")
let checkphp = document.getElementById("php")
let checkJava = document.getElementById("Java")
let check = document.getElementById("check")
let male = document.getElementById("Male")
let female = document.getElementById("Female")

let divusers=document.createElement("p")
document.body.appendChild(divusers)
let users=[]

function printuser(user){
    let text="name: " + user.name + " surname: " + user.surname + " city: " + user.city + " gender: " + user.gender + "  course: " + user.course + "         "
    return text
}

function notblank(string) {
    if (string.trim == "") {
        return false
    }
    return true
}


function hasnumber(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= '0' && string[i] <= '9') {
            return true
        }
    }
    return false
}

function stringHasUpperCase(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'A' && string[i] <= 'Z') {
            return true
        }
    }
    return false
}





btn.addEventListener("click", (event) => {
    event.preventDefault()
    let unos =true
    if (name.value.length < 5) {
        nameerror.textContent = "Polje ne može imati manje od 5 karaktera"
        unos=false
    }
    if (name.value.length > 15) {
        nameerror.textContent = "Polje ne može imati više od 15 karaktera"
        unos=false
    }
    if (surname.value.length < 5) {
        surnameerror.textContent = "Polje mora imati minimum 5 karaktera"
        unos=false
    }
    if (surname.value.length > 20) {
        surnameerror.textContent = "Polje ne može imati više od 20 karaktera"
        unos=false
    }
    if (password.value.length < 8 || hasnumber(password.value) == false || stringHasUpperCase(password.value) == false) {
        passworderror.textContent = "Polje mora imati minimum 8 karaktera, da sadrzi broj i veliko slovo"
        unos=false
    }
    if (passwordConfirm.value != password.value) {
        passworderrorcon.textContent = "Polje mora biti identicno sa prethodnim poljem."
        unos=false
    }
    if (notblank(name.value) == false) {
        nameerror.textContent = "Polje ne sme biti prazno."
        unos=false
    }

    if (notblank(surname.value) == false) {
        surnameerror.textContent = "Polje ne sme biti prazno."
        unos=false
    }

    if (notblank(password.value) ==false) {
        passworderror.textContent = "Polje ne sme biti prazno."
        unos=false
    }
    if (!checkjs.checked && !checkhtml.checked && !checkphp.checked && !checkJava.checked) {
        check.textContent = "Bar jedan kurs mora biti izabran."
        unos=false
    }
    if (unos ==false) {
        return
    }

    let x
    if (male.checked == true) {
        x = "male"
    }
    else
        x = "female"


    let noviobjekat = {
        name: name.value,
        surname: surname.value,
        course: [],
        city: city.value,
        gender: x
    }

    if(checkjs.checked){
        noviobjekat.course.push("js")
    }
    if(checkhtml.checked){
        noviobjekat.course.push("html")
    }
    if(checkphp.checked){
        noviobjekat.course.push("php")
    }
    if(checkJava.checked){
        noviobjekat.course.push("Java")
    }

    noviobjekat.name=(noviobjekat.name[0].toUpperCase() + noviobjekat.name.slice(1))
    noviobjekat.name.trim
    noviobjekat.surname=(noviobjekat.surname[0].toUpperCase() + noviobjekat.surname.slice(1))
    noviobjekat.surname.trim

    users.push(noviobjekat)
    let text=""
    for(let i=0; i<users.length;i++){
      text+= printuser(users[i]) 
    }
    divusers.textContent=text

    name.value=""
    surname.value=""
    password.value=""
    passwordConfirm.value=""
    checkjs.checked=false
    checkhtml.checked=false
    checkphp.checked=false
    checkJava.checked=false
    male.checked=false
    female.checked=false
    city.value="-1"

})