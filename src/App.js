import { async } from 'q';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizChart from './components/QuizChart/QuizChart';
import QuizInfo from './components/QuizeInfo/QuizInfo';
import Main from './Outlet/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quizInfo/:id',
          loader: async ({ params }) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizInfo></QuizInfo>
        },
        {
          path: '/quizchart',
          element: <QuizChart></QuizChart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
