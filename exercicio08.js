/******************************************************************************
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
25143661-2 - Leonir Henrique de Almeida da Rocha
25054416-2 - Pedro Henrique Campos de Azevedo 
25165088-2 - Vinicius Bastos Rodrigues
25178065-2 - Marcos Barcelar
22001126-2 - Eric Ruthes
Data: 09 de abril de 2026
Descritivo: Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero, Isósceles, Escaleno).
*******************************************************************************/

let a = 5;
let b = 5;
let c = 5;

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Não forma um triângulo");
}