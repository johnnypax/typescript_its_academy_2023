class Automezzo{
    private static contatore: number = 0;
    private targa: string;

    constructor(varTarga: string){
        this.targa = varTarga;
        Automezzo.contatore++;
    }

    public static getContatore(): number{
        return this.contatore;
    }

    stampa():string{
        return `${this.targa} `
    }
}

console.log( Automezzo.getContatore() );        //0
var mez: Automezzo = new Automezzo("AB12345");
console.log( Automezzo.getContatore() );        //1
