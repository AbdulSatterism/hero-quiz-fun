import React, { useState } from 'react';
import Option from '../Option/Option';
import QuizChart from '../QuizChart/QuizChart';
import './Questions.css'

const Questions = ({ questions }) => {
    const { question, options, correctAnswer, id } = questions;

    const [count, setCount] = useState(0)

    const handleCorrectAnswer = (event) => {
        const optionValue = event.target.innerText;

        if (optionValue === correctAnswer) {
            alert('this is correct answer')
            if (correctAnswer) {
                setCount(count + 1)
            }
        }
        else {
            alert('this option is not correct')
        }

    }

    return (

        <div className='main container'>
            <h3>Correct Answer :{count}</h3>
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