import axios from "axios"


console.log("hello word");

function add (a, b) {
    return a+b
}

var message = document.querySelector("message").value
var email = document.querySelector("email").value//. c'est pour dire que c'est une classe
document.querySelector('#formulaire')
    .addEventListener("click",function writeToChat (event) {
        
        axios.post('/api/message', {
            message: 'Michel',
            nickname: 'Michel'
        })
    }) 

//Les 7 types sur js, le dernier a partir de juin 2020
//Number
//String
//Boolean
//Null
//Undefined
//Symbol
//Objet
//ES2020 => BigIn

//Pas de classe en js


//camelCase     variable
//PascalCase    fonction
//kebab-case    
//snake_case