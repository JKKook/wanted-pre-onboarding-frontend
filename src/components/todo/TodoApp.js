import React from 'react';
import { useState } from 'react';
import TodoItem from '../todo-item/TodoItem';
import AddTodo from './AddTodo';

export default function TodoApp() {
    const [lists, setLists] = useState([
        {
            id: 1,
            text: 'todos1',
            status: 'active',
        },
        {
            id: 2,
            text: 'todos2',
            status: 'active',
        },
    ]);

    return (
        <section>
            <ul>
                {lists.map((list) => (
                    <TodoItem key={list.id} todo={list} />
                ))}
            </ul>
        </section>
    );
}
