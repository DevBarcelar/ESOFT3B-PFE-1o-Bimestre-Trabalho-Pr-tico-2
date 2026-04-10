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
25054416-2 - Pedro Henrique Campos de Azevedo 
25165088-2 - Vinicius Bastos Rodrigues
25178065-2 - Marcos Barcelar
22001126-2 - Eric Ruthes
Data: 07 de Abril de 2026
Descritivo: Verifique se um caractere informado é uma vogal ou consoante.
***************************/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma letra: ", function(letra) {

    letra = letra.toLowerCase();

    if (letra.length !== 1 || !/[a-z]/.test(letra)) {
        console.log("Digite apenas uma letra válida");
    } else if ("aeiou".includes(letra)) {
        console.log("É uma vogal");
    } else {
        console.log("É uma consoante");
    }

    rl.close();
});