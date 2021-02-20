import React from 'react'
import calcularPontuacao from "../Funções/pontuação.js"
import RenderNestedQuestions from "../Funções/renderNestedQuestions"
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import Translate from "../Funções/translate"

class Card extends React.Component {
    constructor() {
        super()
        this.state = {frente: true, fade: false, toggle: false}
        this.handler = this.handler.bind(this)
    }

    handler(prop1, prop2) {
        this.setState({[prop1]: prop2})
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
            this.setState({toggle :true})
        }

        let arePoints = false
        if (pontos !== undefined) {
            arePoints = true
        }

        return (<>
        <div className="cardHolderDiv">
            {(this.props.nestedQuestions !== undefined  && pontos !== 0 && pontos !== undefined) || (this.props.nestedQuestions !== undefined && (this.props.resposta === undefined || this.props.resposta === ""))? 
            <div className="toggleNested" onClick={() => {this.setState((prevState) => {return({toggle: !prevState.toggle})})}}>
            </div> : null}
                    
         <>
        <div className={this.state.fade ? 'card' : 'card-animated'} style={arePoints ? {backgroundColor: "#" + corselecionada()} : null} 
        onClick={(this.props.math !== undefined || (this.props.resposta !== "" && this.props.resposta !== undefined) || this.props.imagemResposta !== undefined) ? () => {this.setState(prevState => {return {frente: !prevState.frente, fade: !prevState.fade}})} : () => {this.setState((prevState) => {return({toggle: !prevState.toggle})})}}>

            {this.state.frente ?
                <>
                <div className="pointcontainer, isFlipped">
                    <span className="check">{pontos !== 0 && pontos !== undefined ? "✅" : null}</span>
                    <span className="pontos">{pontos}</span>
                </div>

                <div className="isFlipped">
                    <p>
                    <b className="per"> { this.props.pergunta !== undefined ? "Pergunta:": this.props.destaque !== undefined ? Translate(this.props.destaque, "d") : null} </b>
                    <span className="res"><span dangerouslySetInnerHTML={{__html: Translate(this.props.pergunta, "p")}}></span></span>
                    {this.props.imagemPergunta !== undefined ? <p className="imagemPerguntaDiv"><img className="imagemPergunta" alt="imagem pergunta" src={this.props.imagemPergunta}></img></p> : null}
                    </p>
                </div>

                { this.props.obs ?
                <div className="obscontainer, isFlipped">
                    <span className="obs">OBS</span>
                </div> : null}
                </> : 

                <div className={this.state.fade ? "" : 'isFlipped'}>
                    <p>
                    <b className="per">{this.props.resposta !== undefined || this.props.resposta === "" ? "Resposta: ": null}</b> 
                    <span className="res"><span dangerouslySetInnerHTML={{__html: Translate(this.props.resposta, "r")}}></span></span>
                    {this.props.math !== undefined ? <p className="math"><BlockMath math={this.props.math}/></p> : null}
                    {this.props.imagemResposta !== undefined ? <p className="imagemRespostaDiv"><img className="imagemResposta" alt="imagem resposta" src={this.props.imagemResposta}></img></p> : null}
                    </p> 

                {this.props.math !== undefined || this.props.resposta !== undefined || this.props.resposta === "" ? 
                <p>
                    <button onClick={() => funcao(3)}>Acertei fácil!</button> <button onClick={() => funcao(2)}>Acertei, mas difícil!</button> <button onClick={() => funcao(1)}>Errei!</button>
                </p>: null}
                </div>          
                }
                        
        </div> </>

        </div>


        {this.state.toggle && this.props.nestedQuestions !== undefined  && ((pontos !== 0 && pontos !== undefined) || (this.props.resposta === undefined || this.props.resposta === "")) ? 
        <div className="cont">
            <div className={ "verticalLine"}></div>
            {this.props.description !== undefined ? <div className="description">{this.props.description}</div> : null}
            <RenderNestedQuestions 
            handler={this.props.handler}
            changehandler={this.handler}
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


