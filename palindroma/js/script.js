const wordElem = document.getElementById("word");

const formElem = document.querySelector("form");

const resultElem = document.querySelector(".result");

let strResult = "";

formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if(isPalindroma(wordElem.value)) {
        strResult = "è palindroma";
    } else {
        strResult = "non è palindroma";
    }
    resultElem.classList.remove("hidden");
    
    resultElem.innerHTML = `La parola ${wordElem.value}: <strong>${strResult}</strong>`;
    console.log(strResult);
    

    wordElem.value = "";
})

