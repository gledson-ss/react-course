import React from 'react'

import Secretario from './Secretario'

const Funcionario = (props) =>{
    return (
        <Secretario nome={props.nome} idade={props.idade} />
    )
}

export default Funcionario;