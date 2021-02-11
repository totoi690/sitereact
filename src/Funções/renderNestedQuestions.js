import React from 'react'
import NestedQuestions from "../Estrutural/nestedQuestions"

class RenderNestedQuestions extends React.Component {
    render() {
        return(
            this.props.nestedQuestions.map((el, index) => {
                return(
                    <div className="nestedQuestionsAnimate">
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