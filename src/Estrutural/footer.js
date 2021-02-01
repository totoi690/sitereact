import React from 'react'

class Footer extends React.Component {

render() {
    const botaodeapagartudo = <button onClick={() => {localStorage.clear()}}>Apagar pontos</button>
    const queroverobotao = false

    return(<>
    <footer>
        @HeitorTanoue {'\u2728'} {queroverobotao ? botaodeapagartudo: null}
    </footer>
    </>)
}
} 

export default Footer