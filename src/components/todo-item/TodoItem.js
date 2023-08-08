import React from 'react';

export default function TodoItem({ todo }) {
    const { id, text, status } = todo;
    return (
        <li>
            <label>
                <input type='checkbox' />
                <span>{text}</span>
            </label>
        </li>
    );
}
