class Persona {
    nome: string;
    cognome: string;
    eta: number;

    constructor(varNome: string, varCognome: string, varEta: number){
        this.nome = varNome;
        this.cognome = varCognome;
        this.eta = varEta;
    }

    stampa():string{
        return `${this.nome} ${this.cognome} ${this.eta} `
    }
}

var giovanni =  new Persona("Giovanni", "Pace", 50);
console.log(giovanni.stampa());