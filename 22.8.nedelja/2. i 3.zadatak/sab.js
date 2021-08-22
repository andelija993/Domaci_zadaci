let prvib = document.getElementById("prvibroj")
let drugib = document.getElementById("drugibroj")
let div = document.getElementById("div")
let div2 = document.getElementById("div2")
let btn = document.getElementById("btn-add")
let inputcontainer = document.getElementById("input-container")



let checkbox = document.createElement("input")
checkbox.type = "checkbox"
div2.appendChild(checkbox)
checkbox.addEventListener("change", event => {
    if (checkbox.checked) {
        let p = document.createElement('p')
        div.appendChild(p)
        btn.addEventListener("click", (event) => {
            p.textContent = Number(prvib.value) + Number(drugib.value)
            prvib.value = ""
            drugib.value = ""   
        })
        div.hidden=false
    }
    else
        div.hidden=true
})