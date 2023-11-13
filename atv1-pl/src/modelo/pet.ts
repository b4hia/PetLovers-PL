export default class Pet {
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    };

    public get getNome(){return this.nome};
    public get getRaca(){return this.raca};
    public get getGenero(){return this.genero};
    public get getTipo(){return this.tipo};

    public alterarNome(nome: string) {this.nome = nome};
    public alterarRaca(raca: string) {this.raca = raca};
    public alterarGenero(genero: string) {this.genero = genero};
    public alterarTipo(tipo: string) {this.tipo = tipo};
}