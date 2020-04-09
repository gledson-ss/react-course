import React from 'react'


export default (props) =>{
    return(
        <div>
            <button onClick={() => props.notificarSaida('Tamo aq')}>
                sair
            </button>
        </div>
    )
}