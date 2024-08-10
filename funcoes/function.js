/*
1-Crie uma função que recebe o array alunos 
e um número que irá representar a média final;
2-Percorra o array e popule um novo array a
uxiliar apenas com os alunos cujas notas 
são maiores ou iguais à média final;
3-Utilize a técnica "object destructuring" 
para manipular as propriedades desejadas de cada aluno.


const alunos = [
    {
        nome: 'João',
        nota: 6,
    },
    {
        nome: 'Casemiro',
        nota: 5,
    },
    {
        nome: 'Celia',
        nota: 7,
    },
    {
        nome: 'Juvenal',
        nota: 4,
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];

  for(let i = 0; i < arr.length ; i++){

    const { nota, nome } = arr[i]; 

    if(nota >= media){
        aprovados.push(nome)
    }
  } 

  return aprovados;
}

console.log(alunosAprovados(alunos,5))


#multiplique um um array com numeros usando arrow function e map

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const multiplica = numeros.map(numero => numero * 2);

console.log(multiplica);

const myPromisse = new Promise((resolve, reject) => {
    const sucess = false;

    setTimeout(() => {
        if(sucess) {
            resolve('operation sucessful');
        } else {
            reject('Operation failed');
        }
}, 2000)
});

myPromisse
.then(result => console.log(result))
.catch(error => console.log(error));
#Utilize o que foi aprendido neste capítulo e refatore a função imprimeProduto para 
utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings.


let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(carrinho => {
    imprimeProduto(carrinho.nome, carrinho.preco);
})

function imprimeProduto(nome, preco) {
    console.log(`Produto: ${nome} e preço: ${preco}`);
}
    


# Exercício 2 - Hora de usar as setas novamente
Refatore o código a seguir para utilizar arrow functions:


let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(item => {
    console.log(item);
})

1-variavel com o nome e membro da equipe
2-criar uma função que colque em cada linha o membro + o nome da equipe 
*/

var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    
        imprimeNomes() {
            this.membros.forEach(membro => {
                console.log(`${membro} é da equipe ${equipe.nome}`);
                console.log(`Seja bem-vindo(a) ${membro}`);}
            )},

        contaMembros() {
            console.log(`A equipe ${equipe.nome} tem o total de ${this.membros.length}`)
        }
    }

equipe.imprimeNomes();
equipe.contaMembros();