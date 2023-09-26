//Funzioni JavaScript NON TRADOTTE!
// function salutaFunction(varNome){
//     return `Ciao, ${varNome}`;
// }

// const salutaArrow = (varNome) => {
//     return `Ciao, ${varNome}`;
// }

// console.log( salutaFunction("Giovanni") )
// console.log( salutaArrow("Giovanni") )

//Funzioni TypeScript
function salutaFunction(varNome: string): string{
    return `Ciao, ${varNome}`;
}

const salutaArrow = (varNome: string): string => {
    return `Ciao, ${varNome}`;
}

console.log( salutaFunction("Giovanni") )
console.log( salutaArrow("Giovanni") )

//Parametri opzionali
//FIRMA può essere: salutaStudente(string, string): string
//FIRMA può essere: salutaStudente(string): string
function salutaStudente(nominativo: string, matricola?: string): string{
    if(matricola)
        return `Ciao, ${nominativo} - Matr: ${matricola}`
    else
        return `Ciao, ${nominativo}`
}

console.log( salutaStudente("Giovanni Pace", "AB12345") );
console.log( salutaStudente("Giovanni Pace") );

//Valori di default
function salutaStudenteDefault(nominativo: string, matricola: string = "Non definito"): string{
    if(matricola)
        return `Ciao, ${nominativo} - Matr: ${matricola}`
    else
        return `Ciao, ${nominativo}`
}

console.log( salutaStudenteDefault("Giovanni Pace", "AB12345") );
console.log( salutaStudenteDefault("Giovanni Pace") );