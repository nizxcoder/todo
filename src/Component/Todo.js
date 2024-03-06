import React from 'react';
import '../CSS/Todo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isCompleted } from '../store/todoSlice';
export default function Todo({ todo_text, time, deleteTodo, id }) {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(0);
  const handleDone = () => {
    const isDone = window.confirm('Is the TODO Done');
    if (isDone) {
      setCompleted(() => completed + 1);
      dispatch(isCompleted(completed + 1));
    }
  };
  return (
    <div className="container todo-content-box my-2 px-2">
      <h5 style={{ width: '40%', textAlign: 'start' }}>{todo_text}</h5>
      <h6>{time.substring(0, 4) + time.slice(7).toUpperCase()}</h6>
      <div className="btn-box">
        <button
          type="button"
          className="btn btn-success py-1 mx-1 "
          onClick={handleDone}
        >
          Done
        </button>
        <button
          type="button"
          className="btn btn-danger py-1 "
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
