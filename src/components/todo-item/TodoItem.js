import React from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
    const { text, status } = todo;

    // 체크박스 상태 변경 (체크 시, completed)
    const handleChangeStatus = (e) => {
        onUpdate({
            ...todo,
            status: e.target.checked ? 'completed' : 'active',
        });
    };

    const handleDelete = () => {
        onDelete(todo);
    };

    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    checked={status === 'completed'}
                    onChange={handleChangeStatus}
                />
                <span>{text}</span>
            </label>
            <button data-testid='modify-button'>수정</button>
            <button onClick={handleDelete} data-testid='delete-button'>
                삭제
            </button>
        </li>
    );
}
