import React from 'react'
import RenderTopico from "../Funções/renderTopico"

class RenderCards extends React.Component {
    constructor() {
        super()
        this.state = {paraFrente: [], temaAtual: ""}
        this.onUpdateItem = this.onUpdateItem.bind(this)
    }

      componentDidMount() {
        let newArray = Array(this.props.tema.perguntas.length).fill(true)
        this.setState({paraFrente: newArray, temaAtual: this.props.tema.nome})
      }

      onUpdateItem = (index, valor) => { 
        if (this.props.tema.nome === this.state.temaAtual) {
            this.setState(state => {
                let itens = state.paraFrente; itens[index] = valor
                return {itens}
            }); 
        } else {
            this.setState({temaAtual: this.props.tema.nome})
            let newArray = Array(this.props.tema.perguntas.length).fill(true)
            this.setState({paraFrente: newArray});
            this.setState(state => {
                let itens = state.paraFrente; itens[index] = valor
                return {itens}
            });
        }
        this.props.handler("paraFrente", this.state.paraFrente)
      };

    render() {
        if (this.props.tema.perguntas !== undefined) {

            return(          
                this.props.tema.perguntas.map((element, index) => {
                return(
                    <>
                    
                    {element.topico !== undefined ? <div className="topico"> {element.topico} </div> : null}
                    <div className="envolta">
                    <RenderTopico element={element} index={index} tema={this.props.tema} handler={this.props.handler}/> </div>
                    <hr></hr>
                    </>
                )  
            }))
                }  else return null
        }
}

export default RenderCards
