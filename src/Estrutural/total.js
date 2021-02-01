import React from 'react'

class Total extends React.Component {
    render() {
        let pontos = this.props.tema.perguntas
        let arrayPontos = pontos.map((element) => {
            return(element.perguntas.map((element1 => {
                return(element1.pontos === undefined ? 0 : element1.pontos)
            })))
        })
        let somarTudo = (num1, num2) => {return(num1 + num2)}
        let intermed = [].concat.apply([], arrayPontos);
        let arraySoma = intermed.reduce(somarTudo)

        let finished = intermed.every((element) => {
            if (element === 0) {return false}
            else {return true}
        })

        /*if (!localStorage.getItem('localSave')) {
            localStorage.clear()
            let save = {}; let object = {};
            object[this.props.selecttema] = arrayPontos
            save[this.props.selectmateria] = object;
            localStorage.setItem('localSave', JSON.stringify(save))
        } else {
            let saveLocal = JSON.parse(localStorage.getItem('localSave'))
            if (saveLocal[this.props.selectmateria] === undefined) {
                let object = {};
                object[this.props.selecttema] = arrayPontos
                saveLocal[this.props.selectmateria] = object;
                localStorage.setItem('localSave', JSON.stringify(saveLocal))
            };
            if (saveLocal[this.props.selectmateria][this.props.selecttema] === undefined) {
                let object = [this.props.selecttema, arrayPontos];
                saveLocal[this.props.selectmateria][this.props.selecttema] = object
                localStorage.setItem('localSave', JSON.stringify(saveLocal))
            } else {
                
            }
        }*/

        return(<>
            <div className="totalDiv"><div>{this.props.materia.nome} - {this.props.tema.nome}{finished ? " - ✅" : null}</div>
            <i>Total de pontos: </i>{arraySoma}</div></>)
    }
}

export default Total