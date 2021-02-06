import React from 'react'
import Header from "../Estrutural/header"
import HojeBody from "../Estrutural/hojeBody"
import Footer from "../Estrutural/footer"
import "../App.css"
import Navegation from "../Estrutural/navegation"

class Hoje extends React.Component {
    constructor () {
        super()
        this.state = {animate: true}
    }

    render() {
        return (
            <>
            <Header />
            <Navegation />
            <HojeBody />
            <Footer />
            </>
        )
    }
}

export default Hoje