/**************************
   **************************
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
       25054416-2 - Pedro Henrique Campos de Azevedo 
        25165088-2 - Vinicius Bastos Rodrigues
        25178065-2 - Marcos Barcelar
        22001126-2 - Eric Ruthes
        25143661-2 - Leonir Henrique de Alemeida da Rocha
    Data: 07 de abril de 2026
    Descritivo: Ordene um array de números em ordem crescente.
 ***************************/

const numeros = [5, 2, 9, 1, 5, 6, 11];

numeros.sort(function(a, b) {
    return a - b;
});

console.log(numeros);