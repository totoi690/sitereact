import React from 'react'
import calcularPontuacao from "../Funções/pontuação.js"
import RenderNestedQuestions from "../Funções/renderNestedQuestions"
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

class Card extends React.Component {
    constructor() {
        super()
        this.state = {frente: true, fade: false, toggle: true}
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

        let newDate = () => {return new Date()}

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
            calcularPontuacao(pontos, this.props.index, this.props.tema, mudarCor(pontos), newDate()); 
        }


        let arePoints = false
        if (pontos !== undefined) {
            arePoints = true
        }

        return (<>
        <div className="cardHolderDiv">
                    {this.props.nestedQuestions !== undefined  && pontos !== 0 && pontos !== undefined ? 
            <hr className="toggleNested" onClick={() => {this.setState((prevState) => {return({toggle: !prevState.toggle})})}}>
    </hr> : null}
                    
        {this.props.pergunta !== undefined ? <>
        <div className={this.state.fade ? 'card' : 'card-animated'} style={arePoints ? {backgroundColor: "#" + corselecionada()} : null} onClick={() => {this.setState(prevState => {return {frente: !prevState.frente, fade: !prevState.fade}})}}>

            {this.state.frente ?
                <>
                <div className="pointcontainer, isFlipped">
                    <span className="check">{pontos !== 0 && pontos !== undefined ? "✅" : null}</span>
                    <span className="pontos">{pontos}</span>
                </div>

                <div className="isFlipped">
                    <p>
                    <b className="per">Pergunta: </b>
                    <span className="res"><span dangerouslySetInnerHTML={{__html: this.props.pergunta}}></span></span>
                    {this.props.imagemPergunta !== undefined ? <p className="imagemPerguntaDiv"><img className="imagemPergunta" alt="imagem pergunta" src={this.props.imagemPergunta}></img></p> : null}
                    </p>
                </div>
                </> : 

                <div className={this.state.fade ? "" : 'isFlipped'}>
                    <p>
                    <b className="per">Resposta: </b> 
                    <span className="res"><span dangerouslySetInnerHTML={{__html: this.props.resposta}}></span></span>
                    {this.props.math !== undefined ? <p className="math"><BlockMath math={this.props.math}/></p> : null}
                    {this.props.imagemResposta !== undefined ? <p className="imagemRespostaDiv"><img className="imagemResposta" alt="imagem resposta" src={this.props.imagemResposta}></img></p> : null}
                    </p> 

                <p>
                    <button onClick={() => funcao(3)}>Acertei fácil!</button> <button onClick={() => funcao(2)}>Acertei, mas difícil!</button> <button onClick={() => funcao(1)}>Errei!</button></p>
                </div>          
                }
                        
        </div> </>
        : null}
        </div>


        {this.state.toggle && this.props.nestedQuestions !== undefined  && pontos !== 0 && pontos !== undefined ? 
        <div className="cont">
            <div className={ "verticalLine"}></div>
            <RenderNestedQuestions 
            handler={this.props.handler} 
            tema={this.props.tema}
            index={this.props.index}
            toggle={this.state.toggle}
            nestedQuestions={this.props.nestedQuestions}
            />
        </div>
        : null}
        </>)
    }
}

export default Card


