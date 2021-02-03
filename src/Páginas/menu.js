import React from 'react'
import Header from '../Estrutural/header'
import "./menu.css"
import "../App.css"
import RenderBlocks from "../Funções/renderBlocks"
import Footer from "../Estrutural/footer"
import Filtrar from "../Estrutural/filtrar"
import { CSSTransition } from "react-transition-group"

class Menu extends React.Component {
    constructor() {
        super()
        this.handler = this.handler.bind(this)
        this.state = { filtrar: "todos", animate: true , fanimate: true}
    }

    handler(prop1, prop2) {
        this.setState({[prop1]: prop2})
      }

    render() {
        return (
        <div className="principal">
        <Header page={"menu"} handler={this.handler}/>

        <div className="justcolor">
        <CSSTransition
                in={this.state.animate}
                 appear={true}
                 timeout={500}
                 classNames={"fade"}>
        <div className="intro">
            <Filtrar handler={this.handler} fn={this.state.fanimate}/>
            <hr></hr> 
        </div>
        </CSSTransition>
        </div>

        <div className="justcolor">
            <CSSTransition
              in={this.state.fanimate === true}
              appear={true}
               timeout={700}
               classNames={"blocks"}>
            <div className="blockDiv">
                <RenderBlocks filtrar={this.state.filtrar}/>
            </div>
            </CSSTransition>
        </div>

        <Footer />
        </div>
)
    }
}

export default Menu