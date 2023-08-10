import { Link } from 'react-router-dom';
import './App.css';

function App() {
    const contact = {
        signUp: '/signup',
        signIn: '/signin',
        todoList: '/todo',
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
                    <Link to={contact.todoList}>TODO</Link>
                </li>
            </ul>
        </section>
    );
}

export default App;
