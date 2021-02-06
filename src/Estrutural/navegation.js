import React from 'react'
import { Link } from 'react-router-dom'

class Navegation extends React.Component {
    render() {
        return(
            <div className="navigationDiv">
                <Link className="navigationLink" to={"/menu"} style={{ textDecoration: 'none' }}> <span className="link">   MENU    </span></Link>
                <Link className="navigationLink" to={"/hoje"} style={{ textDecoration: 'none' }}> <span className="link">   REVISAR </span></Link>
                <Link className="navigationLink" to={"/perguntas"} style={{ textDecoration: 'none' }}> <span className="link">  PERGUNTAS   </span></Link>
            </div>
        )
    }
}

export default Navegation