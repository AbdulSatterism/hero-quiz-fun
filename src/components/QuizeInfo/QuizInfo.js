import React, { } from 'react';
import { useLoaderData } from 'react-router';
import Questions from '../Questions/Questions';
import './QuizInfo.css'

const QuizInfo = () => {
    const quizQuestion = useLoaderData().data.questions;

    return (
        <div className='quiz'>
            {
                quizQuestion.map(questions => <Questions
                    key={questions.id}
                    questions={questions}
                ></Questions>)
            }


        </div>
    );
};

export default QuizInfo;

/*
 .replace(/(<([^>]+)>)/ig, '')
 */