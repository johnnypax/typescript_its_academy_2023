// Tipi di dato personalizzato
type Persona = {
    nome: string,
    cognome: string,
    eta: number
}

var gio: Persona = {
    nome: "Giovanni",
    cognome: "Pace",
    eta: 50
}

// Tipo di dato con interfaccia
interface Mezzo {
    targa: string | null,
    marca: string | null
}

var automobile: Mezzo = {
    targa: "AB1234",
    marca: "Honda"
}