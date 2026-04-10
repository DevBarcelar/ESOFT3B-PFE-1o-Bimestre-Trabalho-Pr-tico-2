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
    Descritivo: Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).
 ***************************/ 

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    return `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}

console.log(calcularIMC(80, 1.80))

console.log(calcularIMC(85, 1.80))

console.log(calcularIMC(80, 2.10))

console.log(calcularIMC(120, 1.49))