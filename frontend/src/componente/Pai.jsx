import React from 'react'

import Filho from './Filho'

export default () =>{
    const notificarSaidaAqui = 
        (lugar) => alert(`aqui esta ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={notificarSaidaAqui} />
        </div>
    )
}