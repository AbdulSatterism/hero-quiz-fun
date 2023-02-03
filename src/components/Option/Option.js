import React from 'react';
import './Option.css'

const Option = ({ option, handleCorrectAnswer }) => {
    // console.log(option)
    return (
        <div className='option container'>
            <button onClick={(event) => handleCorrectAnswer(event)}> {option}</button>

        </div>
    );
};

export default Option;