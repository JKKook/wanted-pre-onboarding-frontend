import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SignIn({ onTokenChange }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    };

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    };

    const handleSignSubmit = async () => {
        try {
            const response = await fetch(
                'https://www.pre-onboarding-selection-task.shop/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                },
            );

            if (response.ok) {
                const data = await response.json();
                const token = data.access_token;
                // 발급 받은 토큰 로컬에 저장
                localStorage.setItem('token', token);

                // 발급 받은 토큰 부모 컴포넌트 전달
                onTokenChange(token);

                navigate('/todos');
            } else {
                alert('Something wrong');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // 토큰 유무에 따른 리다이렉팅 관리
    useEffect(() => {
        const token = localStorage.getItem('token');

        // 조건 1. 토큰 유무
        // 조건 2. 경로
        if (
            (token && location.pathname === '/signin') ||
            location.pathname === '/signup'
        ) {
            navigate('/todos');
        } else if (!token && location.pathname === '/todos') {
            navigate('/signin');
        }
    }, [navigate, location]);

    return (
        <div>
            <h1>로그인 페이지</h1>
            <input
                data-testid='email-input'
                type='email'
                placeholder='이메일'
                value={email}
                onChange={handleEmailChange}
            />
            <input
                data-testid='password-input'
                type='password'
                placeholder='비밀번호'
                value={password}
                onChange={handlePasswordChange}
            />
            <button data-testid='signin-button' onClick={handleSignSubmit}>
                로그인
            </button>
        </div>
    );
}
