import React from 'react';

export default props => 
    <div>
        <h1>Familia</h1>
        {React.Children.map(props.children, filho =>{
            return React.cloneElement(filho, { ...props}); 
        })}
    </div>