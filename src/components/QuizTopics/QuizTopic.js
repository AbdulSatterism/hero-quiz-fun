import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css'

const QuizTopic = ({ quiz }) => {
    const { name, logo, id } = quiz;
    return (
        <div className='quiz-topics'>
            <img src={logo} alt="" />
            <div className='info'>
                <h3>{name}</h3>
                <Link to={`/quizInfo/${id}`}>
                    <button>quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default QuizTopic;