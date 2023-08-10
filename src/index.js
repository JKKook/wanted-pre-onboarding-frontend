import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './components/sign/SignUp';
import SignIn from './components/sign/SignIn';
import TodoApp from './components/todo/TodoApp';
import NotFound from './NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/todo',
                element: <TodoApp />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
