import React from 'react';

const Button = ({name, handleClick}) => {
    return (
        <button className="calc-button" onClick={() => handleClick(name)}>{name}</button>
    );
};

export default Button;