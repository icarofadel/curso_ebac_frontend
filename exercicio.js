// Abstração
function Pessoa (nome) {
    this.nome = nome;
    this.dizNome = function () {
        console.log(`Olá eu sou ${nome}`)
    }
}

// Classe herdeira 1
function Funcionario (nome, cargo, salario) {

    // cargo
    this.cargo = cargo;
    this.dizCargo = function () {
        console.log(`Sou ${cargo}`)
    }

    // salario
    this.salario = salario;
    this.dizSalario = function() {
        console.log(`Recebo um salário de R$ ${salario}`)
    }

    Pessoa.call(this, nome);
}

// Classe herdeira 2
function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);
}

// Classe herdeira 3
function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 15000);
}

// Classe herdeira 4
function Analista(nome) {
    Funcionario.call(this, nome, "Analista", 3000);
}

// Instâncias
const funcionario1 = new Funcionario("Icaro", "Dev front-end", 5000);
const funcionario2 = new Estagiario("Maria");
const funcionario3 = new Gerente("João");
const funcionario4 = new Analista("Pedro");

funcionario1.dizNome();
funcionario1.dizCargo();
funcionario1.dizSalario();


funcionario2.dizNome();
funcionario2.dizCargo();
funcionario2.dizSalario();

funcionario3.dizNome();
funcionario3.dizCargo();
funcionario3.dizSalario();

funcionario4.dizNome();
funcionario4.dizCargo();
funcionario4.dizSalario();