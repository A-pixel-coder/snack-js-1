const persone = [
    { nome: 'Gino', eta: 25 },
    { nome: 'Pino', eta: 30 },
    { nome: 'Luca', eta: 22 }
];

persone.forEach((persona) =>{
    console.log(`${persona.nome} ha ${persona.eta} anni`)
    console.log(persona.nome + " ha " + persona.eta + " anni")
})