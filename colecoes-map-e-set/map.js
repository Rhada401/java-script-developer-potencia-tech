/*             EXECICIO DE MAP
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios
 que são administradores.

 OBS: FOR OF , SERVINDO PARA PERCORRER OBJESTOS INTERATIVOS(ARRAYS, SET, MAP), CHAMANDO UMA FUNÇÃO 
COM INSTRUÇÕES A SEREM REALIZADAS PARA O VALOR DE CADA OBJETO INSERIDO!
*/

function getAdmins(map){
    let admins = []; //essa variavel é usada para armazenar o nome dos admins no map
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key) //.push inclui no array
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Camila', 'Admin');
usuarios.set('Edson', 'User');
usuarios.set('Rhadames', 'Admin');
usuarios.set('Gleice', 'Admin');

console.log(getAdmins(usuarios))
