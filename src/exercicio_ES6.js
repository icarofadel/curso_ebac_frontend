const alunos = ['Icaro', 'Ana', 'Julia', 'Maria', 'Marcos']

const notasAlunos = alunos.map(function (Aluno) {
    Aluno = {
        nome: Aluno,
        nota: 8,
    }
    return Aluno
})

notasAlunos.push({
    nome: 'Lucio',
    nota: 3
})

notasAlunos.push({
    nome: 'Amanda',
    nota: 5
})

notasAlunos.push({
    nome: 'João',
    nota: 1
})

notasAlunos.push({
    nome: 'Marcelo',
    nota: 6
})

notasAlunos.push({
    nome: 'Bianca',
    nota: 5
})

console.log(notasAlunos)

const AlunosComNota6 = nome => nome.nota >= 6;

const AlunosAprovados = notasAlunos.filter(AlunosComNota6)

console.log(AlunosAprovados)