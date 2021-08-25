// let isValidate = true
// let btnSubmit = document.querySelector('.btn-submit')
// let userReview = document.querySelector('.user-reveiw')

// let firstName = document.querySelector('#firstName')
// let lastName = document.querySelector('#surname')
// let password = document.querySelector('#password')
// let course = document.querySelector('#course')

// let firstNameError = document.querySelector('#name-error')
// let lastNameError = document.querySelector('#surname-error')
// let passwordError = document.querySelector('#password-error')
// let courseError = document.querySelector('#course-error')


// function stringHasNumber(str) {
//     number = /\d/
//     return number.test(str)
// }

// function stringHasUpperCase(str) {
//     chars = /[A-Z]/
//     return chars.test(str)
// }

// btnSubmit.addEventListener('click', (event) => {
//     event.preventDefault()

//     if (firstName.value == "") {
//         firstNameError.textContent = ""
//         firstNameError.textContent = "This field is requierd"
//         isValidate = false
//     } else if (firstName.value.length <= 5) {
//         firstNameError.textContent = ""
//         firstNameError.textContent = "This field must include minimum five character"
//         isValidate = false
//     } else if (firstName.value.length >= 15) {
//         firstNameError.textContent = ""
//         firstNameError.textContent = "This field must have less then fifteen characters"
//         isValidate = false
//     }

//     if (lastName.value == "") {
//         lastNameError.textContent = ""
//         lastNameError.textContent = "This field is requierd"
//         isValidate = false
//     } else if (lastName.value.length <= 5) {
//         lastNameError.textContent = ""
//         lastNameError.textContent = "This field must include minimum five character"
//         isValidate = false
//     } else if (lastName.value.length >= 15) {
//         lastNameError.textContent = ""
//         lastNameError.textContent = "This field must have less then fifteen characters"
//         isValidate = false
//     }

//     if (password.value == "") {
//         passwordError.textContent = ""
//         passwordError.textContent = "This field is requierd"
//         isValidate = false
//     } else if (password.value.length <= 8) {
//         passwordError.textContent = ""
//         passwordError.textContent = "This field must include minimum einht character"
//         isValidate = false
//     } else if (!stringHasNumber(password.value)) {
//         passwordError.textContent = ""
//         passwordError.textContent = "This field must include number"
//         isValidate = false
//     } else if (!stringHasUpperCase(password.value)) {
//         passwordError.textContent = ""
//         passwordError.textContent = "This field must include uppercase"
//         isValidate = false
//     }

//     if (!(course.value == "HTML" || course.value == "CSS" || course.value == "Javascript" || course.value == "PHP")) {
//         courseError.textContent = ""
//         courseError.textContent = "You need to chose somthing"
//         isValidate = false
//     }


//     if (isValidate) {
//         let user = {
//             first_name: firstName.value,
//             last_name: lastName.value,
//             usr_password: password.value,
//             usr_coure: course.value
//         }

//         userReview.textContent += "Name: " + user.first_name
//         userReview.textContent += "Surname: " + user.last_name
//         userReview.textContent += "Couse: " + user.usr_coure

//     }
// })
