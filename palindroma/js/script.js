// prendo la stringa dal dom
const stringElem = document.getElementById("word");

// prendo il form dal dom
const formElem = document.querySelector("form");

// prendo il div result dal dom
const resultElem = document.querySelector(".result");

// creo variabile per il risultato
let strResult = "";

// aggiungo eventListner al submit del form
formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if(isPalindroma(stringElem.value)) {
        strResult = "è palindroma";
    } else {
        strResult = "non è palindroma";
    }
    resultElem.classList.remove("hidden");
    
    resultElem.innerHTML = `La stringa "${stringElem.value}" : <strong>${strResult}</strong>`;
    console.log(strResult);
    

    stringElem.value = "";
})

