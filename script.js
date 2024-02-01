const students =[
    {
        name: "Dácio",
        n1: 8.5,
        n2: 6.8,
    },

    {
        name: "Beatriz",
        n1: 8.1,
        n2: 10,       
    },

    {
        name: "Lucca",
        n1: 5.2,
        n2: 6.5,
    },

    {
        name: "Julianny",
        n1: 4,
        n2: 5,
    }
]

function average (n1, n2) {
    return ((n1+n2)/2)
}

function averageStudent (student){
    
    if (average(student.n1,student.n2)>=7){
    return `A média do(a) aluno ${student.name} é de ${average(student.n1,student.n2)}.
    Parabens, você foi aprovado no concurso`
    }else {
        return `A média do(a) aluno ${student.name} é de ${average(student.n1,student.n2)}.
    Não foi dessa vez ${student.name}, estude mais um pouco`
    }
}

for (let student of students) {
    let averageMessage = averageStudent(student)
    alert(averageMessage)   
}