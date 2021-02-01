import React from 'react'
import Flashcard from "../Imagens/flashcards.png"
import { Redirect } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.state = { redirect: null }
    }

render() {

    if (this.state.redirect && this.props.page !== "menu") {
        return <Redirect to={this.state.redirect} />
      }

    const titulo = "FLASHCARDS"

    return (<div className="header">
    <span><h1 onClick={() => {this.setState({ redirect: "/menu" })}}>{titulo} <img alt="flashcards" className="flashcards" src={Flashcard}></img></h1></span>
    </div>)
}
}

export default Header