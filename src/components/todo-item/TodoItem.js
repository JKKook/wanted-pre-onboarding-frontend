import React from 'react';
import { useState } from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;

    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState('');

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

    const handleClick = () => {
        setIsEdit((prev) => !prev);
    };

    const handleChange = (e) => {
        setEditText(e.target.value);
    };

    const handleEditList = (e) => {
        e.preventDefault();
        onUpdate(id, editText);
        setEditText('');
        setIsEdit(false);
    };

    const handleCancel = () => {
        setIsEdit(false);
    };

    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    // checked={status === 'completed'}
                    onChange={handleChangeStatus}
                />
                <span>{text}</span>
            </label>
            {!isEdit ? (
                <>
                    <button onClick={handleClick} data-testid='modify-button'>
                        수정
                    </button>
                    <button onClick={handleDelete} data-testid='delete-button'>
                        삭제
                    </button>
                </>
            ) : (
                <>
                    <input
                        data-testid='modify-input'
                        value={editText || ''}
                        onChange={handleChange}
                    />
                    <button
                        data-testid='submit-button'
                        onClick={handleEditList}
                    >
                        제출
                    </button>
                    <button data-testid='cancel-button' onClick={handleCancel}>
                        취소
                    </button>
                </>
            )}
        </li>
    );
}
