import React from 'react'
import { CSSTransition } from "react-transition-group"
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

class NestedQuestions extends React.Component {
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

        let newDate = () => {return new Date()}

        let pontos = this.props.object.pontos
        let corselecionada = () => {
            if (this.props.object.cor === undefined) { 
                return undefined } else { 
                    return (this.props.object.cor)
                } }


        let funcao = (pontos) => {            
            this.props.object.pontos === undefined ? this.props.object.pontos = pontos : this.props.object.pontos = this.props.object.pontos + pontos
            this.props.object.cor = mudarCor(pontos)
            this.props.object.data = newDate()
            

            this.setState({
                cor: mudarCor(pontos)
            })
        }


        let arePoints = false
        if (pontos !== undefined) {
            arePoints = true
        }

        return(
            <div className="nestedQuestionsDiv">
                {this.props.toggle ?
                <>
                    <CSSTransition
                        in={this.props.toggle === true}
                        appear={true}
                        timeout={700}
                        classNames={"fade"}>
                    <div className={this.state.fade ? "card nestedQuestions" : "card-animated nestedQuestions"} style={arePoints ? {backgroundColor: "#" + corselecionada()} : null} onClick={() => {this.setState(prevState => {return {frente: !prevState.frente, fade: !prevState.fade}})}}>
                    {this.state.frente ?
                        <>
                        <div className="pointcontainer, isFlipped">
                            <span className="check">{this.props.object.pontos !== 0 && this.props.object.pontos !== undefined ? "✅" : null}</span>
                            <span className="pontos">{this.props.object.pontos}</span>
                        </div>
            
                        <div className="isFlipped">
                            <p>
                            <b className="per">Pergunta: </b>
                            <span className="res"><span dangerouslySetInnerHTML={{__html: this.props.object.pergunta}}></span></span>
                            {this.props.object.imagemPergunta !== undefined ? <p className="imagemPerguntaDiv"><img className="imagemPergunta" alt="imagem pergunta" src={this.props.object.imagemPergunta}></img></p> : null}
                            </p>
                        </div>
                        </> : 
            
                        <div className={this.state.fade ? "" : 'isFlipped'}>
                            <p>
                            <b className="per">Resposta: </b> 
                            <span className="res"><span dangerouslySetInnerHTML={{__html: this.props.object.resposta}}></span></span>
                            {this.props.object.math !== undefined ? <p className="math"><BlockMath math={String(this.props.object.math)}/></p> : null}
                            {this.props.object.imagemResposta !== undefined ? <p className="imagemRespostaDiv"><img className="imagemResposta" alt="imagem resposta" src={this.props.object.imagemResposta}></img></p> : null}
                            </p> 
            
                        <p>
                            <button onClick={() => funcao(3)}>Acertei fácil!</button> <button onClick={() => funcao(2)}>Acertei, mas difícil!</button> <button onClick={() => funcao(1)}>Errei!</button></p>
                        </div>          
                        }
                </div>
                </CSSTransition>
                </>
    : null}
     </div>
     )
    }
}

export default NestedQuestions