// prendo elemento pari o dispari
const evenOddElem = document.getElementById("even-or-odd");

// prendo elemento number
const numberUser = document.getElementById("number");

// prendo elemento form
const formElem = document.querySelector("form");

// prendo div result
const resultElem = document.querySelector(".result");

let strResult = "";

// aggiungo eventListner al form
formElem.addEventListener("submit", function (event) {
    event.preventDefault();

    // genero numero rando con la nunzione
    const rdnNum = randomNumber();
    console.log("Numero PC:", rdnNum);

    // sommo il numero random e quello sento dall'utente
    const sum = rdnNum + parseInt(numberUser.value);
    console.log("Somma:", sum);

    console.log(isEven(sum));

    if (isEven(sum) && evenOddElem.value === "pari") {
        strResult = "Hai Vinto";
    } else if (!isEven(sum) && evenOddElem.value === "dispari") {
        strResult = "Hai Vinto";
    } else {
        strResult = "Hai Perso";
    }

    resultElem.classList.remove("hidden");
    resultElem.innerHTML = `<h3>${strResult}</h3>`
});