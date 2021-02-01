import React from 'react'
import Header from '../Estrutural/header'
import "./menu.css"
import "../App.css"
import RenderBlocks from "../Funções/renderBlocks"
import Footer from "../Estrutural/footer"
import Filtrar from "../Estrutural/filtrar"

class Menu extends React.Component {
    constructor() {
        super()
        this.handler = this.handler.bind(this)
        this.state = { filtrar: "todos"}
    }

    handler(prop1, prop2) {
        this.setState({[prop1]: prop2})
      }

    render() {
        return (
        <div className="principal">
        <Header page={"menu"}/>
        <div className="intro">
            <Filtrar handler={this.handler}/>
            <hr></hr> 
        </div>
        <div className="blockDiv"><RenderBlocks filtrar={this.state.filtrar}/></div>
        <Footer />
        </div>)
    }
}

export default Menu