import React from 'react'
import Header from "../Estrutural/header"
import Dados from "../Dados/dados"
import Footer from "../Estrutural/footer"
import RenderCards from "../Funções/renderCards"
import Forms from "../Estrutural/forms"
import Total from "../Estrutural/total"
import Salvar from "../Funções/salvar"
import ScrollButton from "../Estrutural/scrollbutton"
import "../App.css"

class Perguntas extends React.Component {
    constructor() {
        super()
        this.state = {selectTema: "sintaxe", selectMateria: "gramática", paraFrente: [], windowScroll: ""}
        this.handler = this.handler.bind(this)
        this.selectRandom = this.selectRandom.bind(this)
      }
    
      handler(prop1, prop2) {
        this.setState({[prop1]: prop2})
      }
    
      selectRandom () {
        if (this.props.location.state.materiaP !== undefined && this.props.location.state.temaP !== undefined) {
          window.scrollTo(0, 0)
          this.setState({selectMateria: this.props.location.state.materiaP, selectTema: this.props.location.state.temaP});
        } else {
          let maxlenghtMateria = Object.entries(Dados).length
          let randomMateria = Math.floor(Math.random() * Number(maxlenghtMateria + 1))
          let materia = Object.entries(Dados)[randomMateria][0]
          let maxlenghtTema = Object.entries(Dados[materia].temas).length
          let randomTema = Math.floor(Math.random() * Number(maxlenghtTema-1))
          let tema = Object.entries(Object.entries(Dados)[randomMateria][1].temas)[randomTema][0]
          this.setState({selectMateria: materia, selectTema: tema})
        }
      }
    
      componentDidMount () {
        this.selectRandom()
        Salvar(this.state.selectTema)
      }
    
      render() {
        const materia = Dados[this.state.selectMateria].temas[this.state.selectTema]
        const temas = Object.entries(Dados[this.state.selectMateria].temas)
        const materias = Object.entries(Dados);
        return (
          <div className="App" onClick={() => this.setState({windowScroll: window.scrollY})}>
            <Header/>
            <Forms handler={this.handler} selectMateria={this.state.selectMateria} selectTema={this.state.selectTema} materias={materias} temas={temas}/>
            <Total tema={materia} materia={Dados[this.state.selectMateria]} selecttema={this.state.selectTema} selectmateria={this.state.selectMateria}/>
            <div className="cardDiv">
            <hr></hr>
            {/*materia.gif !== undefined ? <div className="gifDiv"><img className="gif" src={materia.gif} alt="gif"></img><hr></hr></div> : null*/}
            <RenderCards handler={this.handler} tema={materia}/></div>
            <ScrollButton materia={materia}/>
            <Footer />
          </div>)
      }
}

export default Perguntas