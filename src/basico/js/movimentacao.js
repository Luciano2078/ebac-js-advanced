class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.Movimentacao = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(
            lancamento => this.Movimentacao.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        this.Movimentacao.forEach(lancamento => {valorAtualizado += lancamento.saldo})
            
        return valorAtualizado
    }
}

const m01 = new Movimentacao('Banco do Brasil', 'salario', 3500)
const m02 = new Movimentacao('Banco do Brasil', 'plr', 7000)
const m03 = new Movimentacao('Banco do Brasil', 'cartao', -1300)
const m04 = new Movimentacao('Banco do Brasil', 'contas', -1350)


const registro01 = new Registro(20,04,2022)
registro01.novaMovimentacao(m01,m02,m03,m04)
console.log('O saldo dos registros foi de R$ ' + registro01.resumo())

const movimentacoesGerais = [m01,m02,m03,m04]

movimentacoesGerais.map( elemento => 
    console.log(elemento.banco.length)
)