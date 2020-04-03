import React from 'react';

import Membro from './Membro';

export default props =>
    <div>
        <Membro nome="Gledson" sobrenome={props.sobrenome} />
        <Membro nome="Santos" sobrenome={props.sobrenome} />
    </div>
