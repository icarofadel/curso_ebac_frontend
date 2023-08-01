// função de multiplicação
function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
};

const exemploMultiplicacao = multiplicacao(5,10);
console.log(exemploMultiplicacao);

// função de saudação + concatenado
function dizNome(nome:string):string {
    return `Olá ${nome}.`
}

const novaPessoa = dizNome('Icaro');
console.log(novaPessoa);