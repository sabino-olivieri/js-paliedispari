/**
 * Description : controllo se la stringa è palindroma
 * @param {string} stringUser stringa da controllare  
 * @returns {boolean} true se la stringa è palindroma, altrimenti false
 */
function isPalindroma(stringUser) {

    // creo la variabile per la stringa al contrario
    let stringUserReverse = "";

    // creo la variabile per eliminare gli eventuali spazi nella stringa
    let strigNoSpace = "";

    // rendo la stringa minuscola
    stringUser = stringUser.toLowerCase();

    // creo ciclo per eliminare gli eventuali spazi
    for (let i = 0; i < stringUser.length; i++) {
        if(stringUser[i] !== " ") {
            strigNoSpace += stringUser[i];
        }
    }

    // creo ciclo per leggere stringa al contrario e la assegno alla variabile
    for(let i = strigNoSpace.length - 1; i >= 0; i--) {

        stringUserReverse += strigNoSpace[i]
    }

    console.log(strigNoSpace, stringUserReverse);
    
    return strigNoSpace === stringUserReverse;
    
}