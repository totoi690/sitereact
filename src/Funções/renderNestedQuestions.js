import React from 'react'
import NestedQuestions from "../Estrutural/nestedQuestions"

class RenderNestedQuestions extends React.Component {
    render() {
        let check = () => {
        let pontos = this.props.nestedQuestions.map(el => {
            return(el.pontos)
        })
        console.log(pontos)
        if ( pontos.every((pnt) => {return (pnt !== 0 && pnt !== undefined)}) ) {
        this.props.changehandler("toggle", !this.props.toggle)}} 

        return(
            this.props.nestedQuestions.map((el, index) => {
                return(
                    <div className="nestedQuestionsAnimate" onClick={() => check()}>
                <NestedQuestions 
                    handler={this.props.handler} 
                    tema={this.props.tema} 
                    object={el}
                    index={this.props.index}
                    index1={index}
                    toggle={this.props.toggle}
                    length={this.props.nestedQuestions.length}
                />
                </div>
                )})
        )
    }
}

export default RenderNestedQuestions