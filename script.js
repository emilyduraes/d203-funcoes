// let nome = prompt('Qual o seu nome?');
// let idade = prompt('Qual a sua idade?');


// // if(idade >= 30){
// //     alert('Seu véio');
// // else {
// //     alert('Novinho')
// // }


// let frase = idade >= 30 ? 'Seu véio' : 'Novinho';
// alert(frase)

// // comentários = ctrl + ; ou ctrl + /

// let i = 1;

// do{
//     console.log(i);
//     i++;
// }while(i <= 1000);

// // while(i<=1000){
// //     console.log(i);
// //     i++;
// // }

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }


// for(let i = 2; i<=100; i += 2){
//     console.log(i);
// }
// _________________

// let nomes = ['Rafael', 'Leonardo', 'Caroline', 'Ana', 'Gabriela', 'Você'];

// // for(let i = 0; i < 6; i++){
// //     console.log(nomes[i]);
// // }

// for (let nome of nomes){
//     console.log(nome);
// }
// _______________
// function dizerOi(){
//     alert('Oi');
//     alert('Seja bem vindo');
// }

// dizerOi();

// function escolherMaior(numero1, numero2) {
//     // return numero1 > numero2 ? numero1 : numero2;
//     if (numero1 > numero2) {
//         return numero1;
//     }
//     return numero2;
// }

// let palavras = ['carro', 'batata', 'feijão'];
// let palavraBuscada = 'cleyton';

// function verificarPalavra(palavras, palavraBuscada){
//     for(let palavra of palavras){
//         if(palavra == palavraBuscada){
//             return true;
//         }
//         return false;
//     }
    
// }

let palavras = ['carro', 'batata', 'feijão'];

function verificarPalavra(palavras, palavraBuscada){
    for(let palavra of palavras){
        if(palavra == palavraBuscada){
            return true;
        }
    }
    return false;  
}