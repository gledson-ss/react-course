import React, {Component} from 'react'

export default class componenteClasse extends Component {
    render(){
        return (
            <h1>
                {this.props.valor || 'Iru'}
            </h1>
        )
    }
}