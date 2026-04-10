/**************************************************
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
    Descritivo: Crie uma função que retorne um objeto com `nome` e `idade` da pessoa.
 *************************************************/
let nome, idade;

function pessoa(nome, idade) {
    return {
        nome,
        idade
    };
}

const x = pessoa("Eric Ruthes", 18);

console.log(x);
