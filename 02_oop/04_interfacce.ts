interface Persona {
    nome: string,
    cognome: string,
    saluta(): string
}

class Studente implements Persona {
    nome: string;
    cognome: string;

    constructor(varNome: string, varCogn: string){
        this.nome = varNome;
        this.cognome = varCogn;
    }

    saluta(): string {
        return `${this.nome} ${this.cognome}`
    }
}

var stu: Studente = new Studente("Giovanni", "Pace");
console.log(stu.saluta());