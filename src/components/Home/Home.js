import React from 'react';
import { useLoaderData } from 'react-router';
import QuizTopic from '../QuizTopics/QuizTopic';
import './Home.css'

const Home = () => {
    const quizTopics = useLoaderData().data;
    return (
        <div className='quiz-container container'>
            {
                quizTopics.map(quiz => <QuizTopic
                    key={quiz.id}
                    quiz={quiz}
                ></QuizTopic>)
            }
        </div>
    );
};

export default Home;