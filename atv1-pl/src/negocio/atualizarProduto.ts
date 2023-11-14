import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizar from "./atualizar";

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    };
    public atualizar(): void {
        this.produtos.forEach(produto => {
            console.log(`[${this.produtos.indexOf(produto)}] Nome: ${produto.getNome()} | Preço: ${produto.getPreco()}`);
        });
        let indexProd = this.entrada.receberNumero(`Por favor, informe o índice do produto que deseja atualizar: `);
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `);
        let preco = parseFloat(this.entrada.receberTexto(`Por favor, informe o novo preço do produto: `));
        this.produtos[indexProd].nome = nome;
        this.produtos[indexProd].preco = preco;
        console.log(`\nProduto atualizado :)\n`);
    };
};