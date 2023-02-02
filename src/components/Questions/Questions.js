import React from 'react';
import Option from '../Option/Option';
import './Questions.css'

const Questions = ({ questions }) => {
    const { question, options, correctAnswer, id } = questions;

    const handleCorrectAnswer = (event) => {
        const optionValue = event.target.innerText
        if (optionValue === correctAnswer) {
            alert('this is correct value')
        }
        // console.log(event.target.innerText)
    }

    return (
        <div className='main'>
            <div className='question'>
                <h3>Q :{question.replace(/(<([^>]+)>)/ig, '')}</h3>
            </div>
            <div className='option-main'>
                {
                    options.map(option => <Option
                        option={option}
                        handleCorrectAnswer={handleCorrectAnswer}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Questions;