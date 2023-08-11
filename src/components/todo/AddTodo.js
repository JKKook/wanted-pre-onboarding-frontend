import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
    const [addText, setAddText] = useState('');

    const handleChange = (e) => {
        setAddText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ id: uuidv4(), todo: addText, isCompleted: false });
        setAddText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid='new-todo-input'
                value={addText}
                onChange={handleChange}
                placeholder='Add Todo'
            />
            <button data-testid='new-todo-add-button'>추가</button>
        </form>
    );
}
