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
    Descritivo: Encadeie `.filter()` e `.map()`: filtre pares e depois eleve ao quadrado
 *******************************************************************************/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paresAoQuadrado = numeros
    .filter(num => num % 2 === 0)
    .map(num => num ** 2);

console.log('Original:', numeros);
console.log('Pares ao quadrado:', paresAoQuadrado); // [4, 16, 36, 64, 100]

// Teste com array vazio
console.log('Vazio:', [].filter(n => n % 2 === 0).map(n => n ** 2)); // []
