import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from '../todo-item/TodoItem';
import AddTodo from './AddTodo';

export default function TodoApp() {
    // 리스트 로컬에 저장
    const [lists, setLists] = useState(
        JSON.parse(localStorage.getItem('todoLists')) || [
            { id: '1', text: 'todos1', status: 'active' },
            { id: '2', text: 'todos2', status: 'active' },
        ],
    );

    // 리스트의 상태 변화에 따른 로컬 저장
    useEffect(() => {
        localStorage.setItem('todoLists', JSON.stringify(lists));
    }, [lists]);

    const handleAddList = (newList) => {
        setLists([...lists, newList]);
    };

    const handleUpdateList = (updateList) => {
        setLists(
            lists.map((list) =>
                list.id === updateList.id ? updateList : list,
            ),
        );
    };

    const handleDelete = (deleteList) => {
        setLists(lists.filter((list) => list.id !== deleteList.id));
    };

    return (
        <section>
            <AddTodo onAdd={handleAddList} />
            <ul>
                {lists.map((list) => (
                    <TodoItem
                        key={list.id}
                        todo={list}
                        onUpdate={handleUpdateList}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </section>
    );
}
