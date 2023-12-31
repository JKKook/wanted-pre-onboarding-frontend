import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const contact = {
        signUp: '/signup',
        signIn: '/signin',
        todos: '/todos',
    };

    return (
        <section>
            <ul>
                <li>
                    <Link to={contact.signUp}>회원가입</Link>
                </li>
                <li>
                    <Link to={contact.signIn}>로그인</Link>
                </li>
                <li>
                    <Link to={contact.todos}>TODO</Link>
                </li>
            </ul>
        </section>
    );
}
