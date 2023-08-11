import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/sign/SignIn';
import TodoApp from './components/todo/TodoApp';
import SignUp from './components/sign/SignUp';
import Home from './components/Home';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleTokenChange = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route
                    path='/signin'
                    element={<SignIn onTokenChange={handleTokenChange} />}
                />
                <Route path='/todos' element={<TodoApp token={token} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
