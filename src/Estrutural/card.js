import React from 'react'
import calcularPontuacao from "../Funções/pontuação.js"

class Card extends React.Component {
    constructor() {
        super()
        this.state = {frente: true, fade: false}
    }

    render() {
        let mudarCor = (prop) => {
            switch (prop) {
                case 1: return "FFEDED"
                case 2: return "FFFEED"
                case 3: return "EDFFEE"
                default: return null
            }
        }

        let pontos = this.props.tema.perguntas[this.props.index].pontos
        let corselecionada = () => {
            if (this.props.tema.perguntas[this.props.index].cor === undefined) { 
                return undefined } else { 
                    return (this.props.tema.perguntas[this.props.index].cor)
                } }

        let funcao = (pontos) => {
            this.setState({
                cor: mudarCor(pontos)
            })
            calcularPontuacao(pontos, this.props.index, this.props.tema, mudarCor(pontos)); 
        }

        let arePoints = false
        if (pontos !== undefined) {
            arePoints = true
        }

        return (
        <>
        {this.props.pergunta !== undefined ?
        <div className={this.state.fade ? 'card' : 'card-animated'} style={arePoints ? {backgroundColor: "#" + corselecionada()} : null} onClick={() => {this.setState(prevState => {this.props.handler(this.props.index, !prevState.frente); return {frente: !prevState.frente, fade: !prevState.fade}})}}>
            {this.state.frente ?
                <>
                <div className="pointcontainer, isFlipped">
                    <span className="check">{pontos !== 0 && pontos !== undefined ? "✅" : null}</span>
                    <span className="pontos">{pontos}</span>
                </div>

                <div className="isFlipped">
                    <p>
                    <b className="per">Pergunta: </b>
                    <span className="res"><td dangerouslySetInnerHTML={{__html: this.props.pergunta}} /></span>
                    {this.props.imagemPergunta !== undefined ? <p className="imagemPerguntaDiv"><img className="imagemPergunta" alt="imagem pergunta" src={this.props.imagemPergunta}></img></p> : null}
                    </p>
                </div>
                </> : 

                <div className={this.state.fade ? "" : 'isFlipped'}>
                    <p>
                    <b className="per">Resposta: </b> 
                    <span className="res"><td dangerouslySetInnerHTML={{__html: this.props.resposta}} /></span>
                    {this.props.imagemResposta !== undefined ? <p className="imagemRespostaDiv"><img className="imagemResposta" alt="imagem resposta" src={this.props.imagemResposta}></img></p> : null}
                    </p> 

                <p><button onClick={() => funcao(3)}>Acertei fácil!</button> <button onClick={() => funcao(2)}>Acertei, mas difícil!</button> <button onClick={() => funcao(1)}>Errei!</button></p>
                </div>}
        </div> : null}
        </>)
    }
}

export default Card


