/**
 * Description : controllo se la parola è palindroma
 * @param {string} stringUser stringa da controllare  
 * @returns {boolean} true se la parola è palindroma, altrimenti false
 */
function isPalindroma(stringUser) {

    let stringUserReverse = "";
    let strigNoSpace = "";

    stringUser = stringUser.toLowerCase();

    for (let i = 0; i < stringUser.length; i++) {
        if(stringUser[i] !== " ") {
            strigNoSpace += stringUser[i];
        }
    }

    for(let i = strigNoSpace.length - 1; i >= 0; i--) {

        stringUserReverse += strigNoSpace[i]
    }

    console.log(strigNoSpace, stringUserReverse);
    
    return strigNoSpace === stringUserReverse;
    
}