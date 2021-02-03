import React from 'react'
import Card from "../Estrutural/card"

class RenderTopico extends React.Component {
    constructor() {
        super()
        this.state = {paraFrente: [], temaAtual: ""}
        this.onUpdateItem = this.onUpdateItem.bind(this)
    }

      componentDidMount() {
        let newArray = Array(this.props.tema.perguntas.length).fill(true)
        this.setState({paraFrente: newArray, temaAtual: this.props.tema.nome})
      }

      onUpdateItem = (index, valor) => { 
        if (this.props.tema.nome === this.state.temaAtual) {
            this.setState(state => {
                let itens = state.paraFrente; itens[index] = valor
                return {itens}
            }); 
        } else {
            this.setState({temaAtual: this.props.tema.nome})
            let newArray = Array(this.props.tema.perguntas.length).fill(true)
            this.setState({paraFrente: newArray});
            this.setState(state => {
                let itens = state.paraFrente; itens[index] = valor
                return {itens}
            });
        }
        this.props.handler("paraFrente", this.state.paraFrente)
      };

    render() {
        return (
            this.props.element.perguntas.map((element1) => {
                return(
                    <Card 
                        handler={this.onUpdateItem} 
                        tema={this.props.tema.perguntas[this.props.index]} 
                        pergunta={element1.pergunta} 
                        resposta={element1.resposta} 
                        imagemResposta={element1.imagemResposta}
                        imagemPergunta={element1.imagemPergunta}  
                        index={this.props.tema.perguntas[this.props.index].perguntas.indexOf(element1)}
                        topico={element1.topico}
                    />
                    )})
        )
    }
}

export default RenderTopico
