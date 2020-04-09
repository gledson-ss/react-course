import React from 'react';


export default props =>
    <div>
        <h1>Primeiro: {props.valor}</h1>;
        <h1>mais um: {props.valor}</h1>;
    </div>

    

const CompB = props => 
    <h1>Segundo: {props.valor}</h1>;

export {CompB};