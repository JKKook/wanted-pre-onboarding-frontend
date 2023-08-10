import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        handleValidate(inputEmail, password);
    };

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        handleValidate(email, inputPassword);
    };

    // 유효성 검사
    const handleValidate = (newEmail, newPassword) => {
        const isEmailValid = newEmail.includes('@');
        const isPassword = newPassword.length >= 8;
        setIsValid(isEmailValid && isPassword);
    };

    const handleSignSubmit = async () => {
        if (isValid) {
            try {
                const response = await fetch(
                    'https://www.pre-onboarding-selection-task.shop/auth/signup',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    },
                );

                if (response.ok) {
                    alert('회원가입 성공');
                    navigate('/signin');
                } else {
                    alert('Something wrong');
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <div>
            <h1>회원가입 페이지</h1>
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
            <button
                data-testid='signup-button'
                disabled={!isValid}
                onClick={handleSignSubmit}
            >
                회원가입
            </button>
        </div>
    );
}
