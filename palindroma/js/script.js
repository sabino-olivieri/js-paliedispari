const stringElem = document.getElementById("word");

const formElem = document.querySelector("form");

const resultElem = document.querySelector(".result");

let strResult = "";

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

