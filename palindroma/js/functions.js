/**
 * Description : controllo se la parola è palindroma
 * @param {string} word stringa da controllare  
 * @returns {boolean} true se la parola è palindroma, altrimenti false
 */
function isPalindroma(word) {

    let wordReverse = "";

    word = word.toLowerCase();

    for(let i = word.length - 1; i >= 0; i--) {

        wordReverse += word[i]
    }

    console.log(word, wordReverse);
    
    return word === wordReverse;
    
}