/**
 * Description : genero numero random tra 1 e 5
 * @returns {number} numero generato
 */
function randomNumber() {
    const num = Math.floor(Math.random() * 5) + 1;
    return num
}

/**
 * Description : stabilisco se il numero è pari
 * @param {number} num numero da controllare
 * @returns {boolean} true se è pari, altrimenti false
 */
function isEven(num) {

    let flag = false;
    
    if(num % 2 === 0){
        flag = true;
    }

    return flag;

}