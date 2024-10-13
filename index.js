ataque = ""

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar () {

        switch(true) {

            case this.tipo == "mago":
                ataque = "magia";
                break

            case this.tipo == "guerreiro":
                ataque = "espada";
                break

            case this.tipo == "monge":
                ataque = "artes marciais";
                break

            case this.tipo == "ninja":
                ataque = "shuriken";
                break

            default:
                this.tipo = "Não é uma classe válida"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let novoJogador = new heroi ("tai", 26, "mago")
novoJogador.atacar()