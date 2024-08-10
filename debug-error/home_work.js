/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
    -Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError (é quando não é definido a referncia no codigo. fora do escopo
    ou um erro de digitação)
    -Se o array não for do tipo 'object', lance um erro do tipo TypeError (é o error do tipo de metodo ultilizado)/
    -Se o número não for do tipo 'number', lance um erro do tipo TypeError
    -Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError(é o error no array, comprimentos e
    valores numericos)

    -Utilize a declaração try...catch (estrutura basica)

try {
  // Código que pode lançar uma exceção
} catch (erro) {
  // Código para tratar a exceção
}

Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function validaErros(arr, num) {
    try{
        if (arr === undefined || num === undefined)
         throw new ReferenceError(`Este é um erro de ReferenceError`);
    
    if (typeof arr !== 'object') 
        throw new TypeError(`Este é um erro do tipo TypeError`);

    if (typeof num !== 'number') 
        throw new TypeError(`Este é um erro do tipo TypeError`);

    if (arr.length !== arr ) 
        throw new RangeError(`Este é um erro do tipo Range Error`);
    
    return arr;

    } catch (error) {
        if (error instanceof ReferenceError){
            console.log("Este é um erro de ReferenceError");
            console.log(error.message);
        }
        else if (error instanceof TypeError){
            console.log(`Este é um erro do tipo TypeError`);
            console.log(error.message);
        }
        else if (error instanceof RangeError){
            console.log("Este é um erro do tipo RangeError");
            console.log(error.message);
        }
        else {
            console.log("Este é um erro desconhecido");
        }
    }
} 

console.log(validaErros([1, 2, 3], 2)); // Exemplo válido
