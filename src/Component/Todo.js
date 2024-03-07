import React from 'react';
import '../CSS/Todo.css';
export default function Todo({ todo_text, time, deleteTodo, id, handleDone }) {
  return (
    <div className="container todo-content-box my-2 px-2">
      <h5 style={{ width: '40%', textAlign: 'start', wordBreak: 'break-all' }}>
        {todo_text}
      </h5>
      <h6>{time.substring(0, 4) + time.slice(7).toUpperCase()}</h6>
      <div className="btn-box">
        <button
          type="button"
          className="btn btn-warning py-1 m-1 px-3 is-done"
          onClick={() => handleDone(id)}
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
