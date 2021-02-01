import React from 'react'
import ScrollIcon from "../Imagens/scrolltop.png"
import ScrollIconBlue from "../Imagens/scrolltopblue.png"

class ScrollButton extends React.Component {
    constructor() {
        super()
        this.scrollTop = this.scrollTop.bind(this)
        this.state = {mouseOver: false}
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ scroll: window.scrollY }), 100);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

     render() {
         return (
             <div className="scrollButtonDiv">
                 <button onMouseOver={() => this.setState({ mouseOver: true})} onMouseLeave={() => this.setState({ mouseOver: false })} className={this.state.scroll > 100 ? "scrollButton" : "scrollButton scrollButtonInv"} onClick={this.scrollTop}>
                 <img className="scrollIcon" alt="icon" src={this.state.mouseOver ? ScrollIconBlue : ScrollIcon}></img>
                 </button>
             </div>
         )
     }
}

export default ScrollButton