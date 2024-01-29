/*             EXECICIO DE SET
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){  //arr = array
    const mySet = new Set (arr);

    return[...meuArray]; //usando a tecnica  de espalhamento spread que, 
}

console.log(valoresUnicos(meuArray));

/*
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return Array.from(mySet)
}
console.log(valoresUnicos(meuArray));
*/
