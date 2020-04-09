import React from 'react';

const lista = ['gled', 'glendha', 'antonio', 'outro']

<<<<<<< HEAD
const ComponentComFuncao = (props) =>{
        
       const func = (itens) => {
           return itens.map((item) => <li>
                                        {item}        
                                    </li>
           )
       }

        return (
            <ul>
                {func(lista)}
            </ul>
        )
=======
const ComponentComFuncao = () =>{
        
        return(lista.forEach(element => {
            return <li>
                {element}
            </li>
        }));
>>>>>>> 94be1c88a252b341b193675e70baafcb488856b0

        
        
}

export {ComponentComFuncao};
    


    
