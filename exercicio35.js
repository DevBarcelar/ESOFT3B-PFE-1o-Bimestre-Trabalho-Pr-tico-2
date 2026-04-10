/**************************
    Curso: Engenharia de Software
    Disciplina: Programação Front-End
    Professor: Flores
    Turma: ESOFT-3B
    Componentes:
        25061077-2 - Kauã Ricardo Gomes Fagundes
        25145454-2 - Gustavo Silva Rodrigues 
        25004001-3 - Rafael Diesel
        25229846-2 - Wendel Souza Cardoso
        25228676-2 - Marlon Willian Silva Barros
        25143661-2 - Leonir henrique de Alemeida da Rocha
        25054416-2 - Pedro Henrique Campos de Azevedo 
        25165088-2 - Vinicius Bastos Rodrigues
        25178065-2 - Marcos Barcelar
        22001126-2 - Eric Ruthes
    Data: 09 de abril de 2026
    Descritivo: Use `.find()` para encontrar o primeiro número maior que 10 em um array.
 *******************************************************************************/

const numeros = [5, 8, 12, 3, 15, 7];

const primeiroMaior10 = numeros.find(num => num > 10);

console.log('Array:', numeros);
console.log('Primeiro maior que 10:', primeiroMaior10); // 12

// Teste sem números > 10
const semMaior10 = [1, 5, 8, 9];
console.log('Sem maior 10:', semMaior10.find(num => num > 10)); // undefined
