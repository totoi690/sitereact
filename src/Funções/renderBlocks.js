import React from 'react'
import Dados from "../Dados/dados"
import { Redirect } from 'react-router-dom';

class RenderBlocks extends React.Component {
    constructor() {
        super()
        this.state = { redirect: null }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirect, state: { materiaP: this.state.materiaP, temaP: this.state.temaP}}} />
          }

          if(this.props.search !== undefined && this.props.search[0] !== undefined){
            let materia = this.props.search[0].materiaNome
            let nome = this.props.search[0].temaNome
            let gif = this.props.search[0].gif
            return (

                        <div className= "blockOuterDiv">
                        <div className ="blockInnerDiv" onClick={() => this.setState({ redirect: "/perguntas", materiaP: this.props.search[0].materia, temaP: this.props.search[0].tema })}>
                        <div className="block">
                            <div className="blockGif">{ gif !== undefined ? <img className="blockGifImg" alt="gif" src={gif}></img> : <div className="rect">IMAGEM INDISPONÍVEL</div>}</div>
                            <hr className="hrFull"></hr>

                            <div className="blockText">
                            <div className="blockName">{nome}</div> 
                            <div className="blockMateria">{materia}</div>
                            </div>
                        </div>
                        </div>
                        </div>     
            )
          } else {
            if (this.props.filtrar !== undefined && this.props.filtrar !== "todos") {
                return (
                    Object.entries(Dados[this.props.filtrar].temas).map((element2, ind) => {
                        let materia = Dados[this.props.filtrar].nome
                        let nome = element2[1].nome
                        let gif = element2[1].gif
                        return (
                            <div className= "blockOuterDiv" key={ind}>
                            <div className ="blockInnerDiv" onClick={() => this.setState({ redirect: "/perguntas", materiaP: this.props.filtrar, temaP: element2[0] })}>
                            <div className="block">
                                <div className="blockGif">{ gif !== undefined ? <img className="blockGifImg" alt="gif" src={gif}></img> : <div className="rect">IMAGEM INDISPONÍVEL</div>}</div>
                                <hr className="hrFull"></hr>
    
                                <div className="blockText">
                                <div className="blockName">{nome}</div> 
                                <div className="blockMateria">{materia}</div>
                                </div>
                            </div>
                            </div>
                            </div>
                        )
                    })
                )
    
            } else {
            return (
                Object.entries(Dados).map((element1) => {
                    return (
                        Object.entries(element1[1].temas).map((element2, ind) => {
                            let materia = element1[1].nome
                            let nome = element2[1].nome
                            let gif = element2[1].gif
                            let loading = element2[1].loading
                            return (
    
                                <div className ="blockInnerDiv" key={ind} onClick={() => this.setState({ redirect: "/perguntas", materiaP: element1[0], temaP: element2[0] })}>
                                {loading ? <><div className="loading">&#xd7;</div><div className="loadingmini">Em produção...</div></> : null}
                                <div className="block">
                                    <div className="blockGif">{ gif !== undefined ? loading ? <img className="blockGifImg grayscale" alt="gif" src={gif}></img> : <img className="blockGifImg" alt="gif" src={gif}></img> : <div className="rect">IMAGEM INDISPONÍVEL</div>}</div>
                                    <hr className="hrFull"></hr>
    
                                    <div className="blockText">
                                    <div className="blockName">{nome}</div> 
                                    <div className="blockMateria">{materia}</div>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    )
                })
                )}
          }
        
    }
}

export default RenderBlocks