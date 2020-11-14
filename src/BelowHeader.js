import React from 'react';
import './index.css';


export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
           prime: true,
           request: false,
           hoover: false,
           movie: true,
           HD: false,
           game:false,
           doc:false,
           software: false
        }
     }
        movie=()=>{
            this.setState({
                movie: true,
                HD:false,
                game:false,
                doc: false,
                software:false
            })
        }
        HD=()=>{
            this.setState({
                movie: false,
                HD:true,
                game:false,
                doc: false,
                software:false
            })
        }
        Game=()=>{
            this.setState({
                movie: false,
                HD:false,
                game:true,
                doc: false,
                software:false
            })
        }
        Documentary=()=>{
            this.setState({
                movie: false,
                HD:false,
                game:false,
                doc: true,
                software:false
            })
        }
        software=()=>{
            this.setState({
                movie: false,
                HD:false,
                game:false,
                doc: false,
                software:true
            })
        }

   render() {
 
      return (
         <div className="mainHeader">
         
        <div className="secondHeader">
        <div >
        {this.state.movie && this.state.HD == false && this.state.game == false && this.state.doc==false && this.state.software==false ?
            <button style={{outline: 'none'}} class="belowButtonunpress" onClick={()=>this.movie()}>
                Movie
            </button>:
            <button style={{outline: 'none'}} class="belowButton" onClick={()=>this.movie()}>
                Movie
            </button>}

            {this.state.movie==false && this.state.HD && this.state.game == false && this.state.doc==false && this.state.software==false ?
         
            <button style={{outline: 'none'}} class="belowButtonunpress" onClick={()=>this.HD()}>
                HD
            </button> :
            <button style={{outline: 'none'}} class="belowButton" onClick={()=>this.HD()}>
                HD
            </button>}

            
            {this.state.movie==false && this.state.HD==false && this.state.game && this.state.doc==false && this.state.software==false ?
         
                <button style={{outline: 'none'}} class="belowButtonunpress" onClick={()=>this.Game()}>
                Game
            </button>
                :
            <button style={{outline: 'none'}} class="belowButton" onClick={()=>this.Game()}>
                Game
            </button>}

            {this.state.movie==false && this.state.HD==false && this.state.game==false && this.state.doc && this.state.software==false ?
         
                <button style={{outline: 'none'}} class="belowButtonunpress" onClick={()=>this.Documentary()}>
                Documentary
            </button>
                    :
            <button style={{outline: 'none'}} class="belowButton" onClick={()=>this.Documentary()}>
                Documentary
            </button>}

            {this.state.movie==false && this.state.HD==false && this.state.game==false && this.state.doc==false && this.state.software ?
         
                <button style={{outline: 'none'}} class="belowButtonunpress" onClick={()=>this.software()}>
                Software
            </button>
                    :
            <button style={{outline: 'none'}} class="belowButton" onClick={()=>this.software()}>
                Software
            </button>}
            </div>
        </div>
         </div>
      );
   }
}