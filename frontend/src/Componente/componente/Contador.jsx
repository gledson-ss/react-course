import React, {Component} from 'react';

export default class Contador extends Component {

    state = {
        numero: 0
    }
    
    alteraNum = (dif) =>{
        this.setState({numero : this.state.numero + dif})
    }

    maisUm = () => {
        this.alteraNum(1);
    }
    menosUm = () => {
        this.alteraNum(-1);
    }
    render(){
        return(
            <div>
                <div> Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                
                { <button onClick={this.menosUm}>Dec</button> }
            </div>
        )
    }
}

//Sol 1
/* constructor(props){
        super(props);
        this.maisUm = this.maisUm.bind(this);
    } */
//Sol 2
//<button onClick={() => this.maisUm()}>Inc</button>