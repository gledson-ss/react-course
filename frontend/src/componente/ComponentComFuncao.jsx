import React from 'react';

const lista = ['gled', 'glendha', 'antonio', 'outro']

const ComponentComFuncao = () =>{
        
        return(lista.forEach(element => {
            return <li>
                {element}
            </li>
        }));

        
        
}

export {ComponentComFuncao};
    


    
