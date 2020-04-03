import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponente from './componente/primeiroComponente'
//import CompAA,{ CompB} from './componente/primeiroComponente';
//import FamiliaComp from './componente/FamiliaComp'

import Familia from './componente/Familia'
import Membro from './componente/Membro'


const elemento = document.getElementById('root'); 


ReactDOM.render(
    <div>
       <Familia sobrenome="Santos">
           <Membro nome="gledson" />
           <Membro nome="glendha" />
           <Membro nome="alcione" />
       </Familia>
    </div>
        
    
    , elemento);