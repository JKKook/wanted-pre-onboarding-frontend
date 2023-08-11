import React from 'react';
import { useState, useEffect } from 'react';
import TodoItem from '../todo-item/TodoItem';
import AddTodo from './AddTodo';

export default function TodoApp({ token }) {
    // 리스트 로컬에 저장
    const [lists, setLists] = useState(readTodosFromLocalStorage);

    useEffect(() => {
        // 비동기 데이터 패칭(토큰)
        async function fetchTodos() {
            try {
                const response = await fetch(
                    'https://www.pre-onboarding-selection-task.shop/todos',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: token, // 토큰 가져와서 적용
                        },
                        body: JSON.stringify({
                            lists,
                        }),
                    },
                );

                if (response.ok) {
                    const data = await response.json();
                    setLists(data);

                    // 리스트의 상태 변화에 따른 로컬 저장
                    // 로컬 스토리지에도 업데이트 된 데이터 저장
                    localStorage.setItem('todos', JSON.stringify(data));
                } else {
                    console.error('리스트 불러오는데 실패했습니다');
                }
            } catch (error) {
                console.error('데이터패칭 에러', error);
            }
        }
        //
        fetchTodos();
        localStorage.setItem('todos', JSON.stringify(lists));
    }, [lists]);

    const handleAddList = (newList) => {
        setLists([...lists, newList]);
    };

    const handleUpdateList = (id, updateList) => {
        setLists(
            lists.map((list) =>
                list.id === id ? { ...list, todo: updateList } : list,
            ),
        );
    };

    const handleDeleteList = (deleteList) => {
        setLists(lists.filter((list) => list.id !== deleteList.id));
    };

    return (
        <section>
            <h1>투두리스트</h1>
            <AddTodo onAdd={handleAddList} />
            <ul>
                {lists.map((list) => (
                    <TodoItem
                        key={list.id}
                        list={list}
                        onUpdate={handleUpdateList}
                        onDelete={handleDeleteList}
                    />
                ))}
            </ul>
        </section>
    );
}

const readTodosFromLocalStorage = () => {
    const todos = localStorage.getItem('todos'); // todos를 받아오고
    return todos ? JSON.parse(todos) : [];
};
