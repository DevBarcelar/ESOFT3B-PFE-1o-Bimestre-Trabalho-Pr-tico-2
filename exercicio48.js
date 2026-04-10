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
    Descritivo: Use `.reduce()` para transformar um array de objetos em um objeto somatório (ex: somar salários).
 *******************************************************************************/

let funcionarios = [
    { nome: "João", salario: 3000, idade: 30 },
    { nome: "Maria", salario: 4500, idade: 25 },
    { nome: "Carlos", salario: 2800, idade: 35 },
    { nome: "Ana", salario: 5200, idade: 28 }
];

// Criar um objeto com várias somas
let estatisticas = funcionarios.reduce((acumulador, funcionario) => {
    acumulador.totalSalarios += funcionario.salario;
    acumulador.totalIdades += funcionario.idade;
    acumulador.quantidade++;
    return acumulador;
}, { totalSalarios: 0, totalIdades: 0, quantidade: 0 });

console.log(estatisticas);
// {
//   totalSalarios: 15500,
//   totalIdades: 118,
//   quantidade: 4
// }

console.log(`Média salarial: R$ ${estatisticas.totalSalarios / estatisticas.quantidade}`);
console.log(`Média de idade: ${estatisticas.totalIdades / estatisticas.quantidade} anos`);
