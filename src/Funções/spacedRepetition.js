import React from 'react'
import Dados from "../Dados/dados"
import Card from "../Estrutural/card"
import "../Páginas/hoje.css"

class SpacedRepetition extends React.Component {
    constructor () {
        super()
        this.state = { errouArray: []}
        this.fazerArray = this.fazerArray.bind(this)
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
                                }
                            }))
                        }))
                    }))
                } else {return ""}
            }))
        })
        return (array)
    }

    componentDidMount() {
        this.setState({ errouArray: this.fazerArray()})
    }

    render() {
        if ( this.state.errouArray[0] !== undefined) {
            return (
            this.state.errouArray.map((el) => {
                let materia = el.materia
                let tema = el.tema
                let topico = el.topico
                let pergunta = el.object.pergunta
                let resposta = el.object.resposta
                let imagemPergunta = el.object.imagemPergunta
                let imagemResposta = el.object.imagemResposta
                let data = el.object.data
                let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
                let index = el.index
                
                    return(
                        <>
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
                            />
                            </>
                    )
                
            }))} 
            else {
                return (
                    <>
                    <div className="error">Você ainda não revisou nada! Responda as perguntas e volte aqui mais tarde!</div>
                    <img className="errorGif" alt="errorGif" src="https://media3.giphy.com/media/1VT3UNeWdijUSMpRL4/source.gif"></img>
                    </>
                )
            }
        
    }

}

export default SpacedRepetition