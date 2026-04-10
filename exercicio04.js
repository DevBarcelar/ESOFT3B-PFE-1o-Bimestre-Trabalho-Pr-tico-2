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
    Descritivo: Crie um sistema simples de login: se o usuário for "admin" e a senha "1234", mostre "Acesso Permitido",
caso contrário, "Acesso Negado".
 *******************************************************************************/

// Sistema de login completo

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tentativas = 3;
let bloqueado = false;

function fazerLogin() {
    if (bloqueado) {
        console.log("Sistema bloqueado! Reinicie o programa.");
        rl.close();
        return;
    }

    rl.question("Digite o usuário: ", (usuario) => {
        if (!usuario || usuario.trim() === "") {
            console.log("Usuário não pode estar vazio!");
            return fazerLogin();
        }

        rl.question("Digite a senha: ", (senha) => {
            if (!senha || senha.trim() === "") {
                console.log("Senha não pode estar vazia!");
                return fazerLogin();
            }

            if (usuario === "admin" && senha === "1234") {
                console.log("Acesso Permitido! Bem-vindo,", usuario);
                rl.close();
            } else {
                tentativas--;

                if (tentativas > 0) {
                    console.log(`Acesso Negado! Tentativas restantes: ${tentativas}`);
                    fazerLogin();
                } else {
                    bloqueado = true;
                    console.log("Sistema bloqueado!");
                    rl.close();
                }
            }
        });
    });
}

fazerLogin();