import React from 'react'
import Dados from "../Dados/dados"
import Card from "../Estrutural/card"
import "../Páginas/hoje.css"

class SpacedRepetition extends React.Component {
    constructor () {
        super()
        this.state = { colors: {vermelho:"FFEDED", amarelo:"FFFEED", verde:"EDFFEE",}}
        this.fazerArray = this.fazerArray.bind(this)
        this.calcularIntervalo = this.calcularIntervalo.bind(this)
        this.fibonacci = this.fibonacci.bind(this)
    }

    calcularIntervalo = (pontos, cor) => {
        const PONTOSMULTIPLIER = 3
        const CORMULTIPLIER = {
            vermelho: 0,
            amarelo: 3,
            verde: 5,

            multi: 1.2,
        }

        let soma, numCor
        let numPontos = pontos / PONTOSMULTIPLIER
        switch (cor) {
            case this.state.colors.verde: numCor = CORMULTIPLIER.verde; break
            case this.state.colors.amarelo: numCor = CORMULTIPLIER.amarelo; break
            case this.state.colors.vermelho: numCor = CORMULTIPLIER.vermelho; break
            default: numCor = 0; break
        }

        soma = numCor * CORMULTIPLIER.multi + numPontos
        return this.fibonacci(soma)
    }

    fibonacci(n) {
        return n < 1 ? 0
             : n <= 2 ? 1
             : this.fibonacci(n - 1) + this.fibonacci(n - 2);
             // 0 , 1 , 1 , 2 , 3 , 5, , 8 , 13 , 21 , 24 , 34 , 55 , 89
     }

    fazerArray() {
        let array = []
        Object.entries(Dados).map((e1) => {
            let materia = e1[0]
            let materiaNome = e1[1].nome
            return (e1.map((e2) => {
                if (typeof e2 !== "string") {
                    return (Object.entries(e2.temas).map((e4) => {
                        let nome = e4[0]
                        let temaNome = e4[1].nome
                        return (e4[1].perguntas.map((e5, index) => {
                            let topico = e5.topico
                            return (e5.perguntas.map((pergunta) => {
                                //CONDIÇÃO PARA IR PARA A REVISÃO
                                if (pergunta.data !== undefined) {
                                let data = new Date(pergunta.data)
                                let spacedData = new Date(pergunta.data)
                                spacedData.setDate(data.getDate() + this.calcularIntervalo(pergunta.pontos, pergunta.cor))
                                pergunta.spacedData = spacedData
                                if (
                                    data >= spacedData
                                    ) {
                                    array.push({
                                        tema: nome,
                                        temaNome: temaNome,
                                        materiaNome: materiaNome,
                                        topico: topico,
                                        object: pergunta,
                                        materia: materia,
                                        index: index
                                    })
                                    return pergunta.pergunta
                                } else {
                                    return ""
                                }} else return ""
                            }))
                        }))
                    }))
                } else {return ""}
            }))
        })
        return (array)
    }


    render() {
        if ( this.fazerArray()[0] !== undefined) {
            let arrayOrdenado = this.fazerArray().sort((a, b) => {
                return a.temaNome < b.temaNome ? a.materiaNome < b.materiaNome ? a.object.data < b.object.data ? -1 : 0 : 0 : 0
            })
            return (
            arrayOrdenado.map((el) => {
                let materia = el.materia
                let tema = el.tema
                let topico = el.topico
                let pergunta = el.object.pergunta
                let resposta = el.object.resposta
                let imagemPergunta = el.object.imagemPergunta
                let imagemResposta = el.object.imagemResposta
                let data = new Date(el.object.data)
                let index = el.index
                let nestedQuestions = el.object.nestedQuestions
                let math = el.object.math
                let description = el.object.description
                data.setDate(data.getDate() + this.calcularIntervalo(el.object.pontos, el.object.cor))
                let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
                
                    return(
                        <div onClick={() => {this.forceUpdate()}}>
                            <div className="divData">
                                {dataFormatada}
                                <span className="right">{el.materiaNome} - {el.temaNome} - {topico}</span>
                            </div>
                            <Card
                                tema={Dados[materia].temas[tema].perguntas[index]} 
                                pergunta={pergunta} 
                                resposta={resposta} 
                                imagemResposta={imagemResposta}
                                imagemPergunta={imagemPergunta}  
                                index={Dados[materia].temas[tema].perguntas[index].perguntas.indexOf(el.object)}
                                topico={topico}
                                nestedQuestions={nestedQuestions}
                                math={math}
                                description={description}
                            />
                        </div>
                    )
                
            }))} 
            else {
                return (
                    <>
                    <div className="error">Não há nada para revisar! Responda mais perguntas e volte aqui mais tarde!</div>
                    <img className="errorGif" alt="errorGif" src="https://media3.giphy.com/media/1VT3UNeWdijUSMpRL4/source.gif"></img>
                    </>
                )
            }
        
    }
    
}

export default SpacedRepetition