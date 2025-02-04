const studenti = [
    { nome: "Anna", eta: 17 },
    { nome: "Marco", eta: 22 },
    { nome: "Laura", eta: 19 },
    { nome: "Giorgio", eta: 16 }
]

const studentiMagiorenni = studenti.filter((studente)=>{
    return studente.eta >= 18
})

console.log(studentiMagiorenni)

studentiMagiorenni.forEach((studente)=>{
    console.log("lo studente " + studente.nome + " è magiorenne")
})