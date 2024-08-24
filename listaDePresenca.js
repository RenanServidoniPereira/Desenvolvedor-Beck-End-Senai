const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaDePresenca = [];

function mostrarMenu() {
    console.log("\nO que você gostaria de fazer?");
    console.log("1. Adicionar aluno");
    console.log("2. Remover aluno");
    console.log("3. Ver alunos na lista");
    console.log("4. Sair");
}

function adicionarAluno() {
    rl.question('Digite o nome do aluno para adicionar: ', (nome) => {
        listaDePresenca.push(nome);
        console.log(`\n${nome} foi adicionado à lista.`);
        iniciar();
    });
}

function removerAluno() {
    if (listaDePresenca.length === 0) {
        console.log("\nA lista está vazia. Não há alunos para remover.");
        iniciar();
    } else {
        rl.question('Digite o nome do aluno para remover: ', (nome) => {
            const index = listaDePresenca.indexOf(nome);
            if (index > -1) {
                listaDePresenca.splice(index, 1);
                console.log(`\n${nome} foi removido da lista.`);
            } else {
                console.log(`\nAluno ${nome} não encontrado na lista.`);
            }
            iniciar();
        });
    }
}

function verAlunos() {
    console.log("\nAlunos na lista de presença:");
    if (listaDePresenca.length > 0) {
        listaDePresenca.forEach((aluno, index) => {
            console.log(`${index + 1}. ${aluno}`);
        });
    } else {
        console.log("Nenhum aluno na lista.");
    }
    iniciar();
}

function iniciar() {
    mostrarMenu();
    rl.question('Escolha uma opção: ', (opcao) => {
        if (opcao === '1') {
            adicionarAluno();
        } else if (opcao === '2') {
            removerAluno();
        } else if (opcao === '3') {
            verAlunos();
        } else if (opcao === '4') {
            rl.close();
            console.log("Saindo...");
        } else {
            console.log("\nOpção inválida. Tente novamente.");
            iniciar();
        }
    });
}

iniciar();