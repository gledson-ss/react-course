import React from 'react';

import Membro from './Membro';

export default props =>
    <div>
        <Membro nome={props.nome} sobrenome={props.sobrenome} />
        
    </div>
