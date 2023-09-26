class Persona {
    protected nome: string | undefined;

    constructor(varNome?: string){
        this.nome = varNome;
    }

    public getNome(): string | undefined{
        return this.nome;
    }
    public setNome(varNome: string){
        this.nome = varNome
    }

    public stampa():string{
        return `PERSONA: ${this.nome}`
    }
}

class Studente extends Persona{
    private matricola: string | undefined;

    constructor(varNome: string, varMatricola: string){
        super(varNome);
        this.matricola = varMatricola;
    }

    getMatricola(): string | undefined{
        return this.matricola
    }

    setMatricola(varMatr: string){
        this.matricola = varMatr
    }

    public stampa():string{
        return `STUDENTE: ${super.getNome()} ${this.matricola}`
    }
}

let gio: Persona = new Persona("Giovanni Pace");
console.log(gio.stampa());
let val: Studente = new Studente("Valeria Verdi", "AB1234");
console.log(val)