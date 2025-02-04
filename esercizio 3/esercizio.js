const prodotti = [
    { nome: 'Smartphone', prezzo: 800 },
    { nome: 'Cuffie', prezzo: 50 },
    { nome: 'Mouse', prezzo: 30 },
    { nome: 'Monitor', prezzo: 120 }
]

const prodottiEconomici = prodotti.filter((oggetto)=>{
    return oggetto.prezzo < 100
})

console.log(prodottiEconomici)