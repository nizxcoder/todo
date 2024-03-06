import React, { useEffect, useState } from 'react';
import '../CSS/TodoContainer.css';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../store/todoSlice';

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [todoCounter, setTodoCounter] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const oldTodos = JSON.parse(savedTodos);
      setTodos(oldTodos);
      dispatch(increase(oldTodos.length));
      setTodoCounter(oldTodos.length);
    }
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const newTodo = {
    inputValue: inputValue,
    time: new Date().toLocaleTimeString(),
  };

  const handleSubmit = (event) => {
    let input = document.getElementsByTagName('input')[0];
    event.preventDefault();
    if (inputValue.trim() === '') {
      input.style.borderColor = 'red';
      return;
    } else {
      input.style.borderColor = 'gray';
      setTodos([...todos, newTodo]);
      setTodoCounter(() => todoCounter + 1);
      dispatch(increase(todoCounter + 1));
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setTodoCounter(() => todoCounter - 1);
    dispatch(decrease(todoCounter - 1));
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  return (
    <div className="container todo-box">
      <h1>TODO LIST</h1>
      <div className="todo-list">
        {todos.length < 1 ? (
          <div className="empty">NO TODOS!</div>
        ) : (
          todos.map((e, index) => (
            <Todo
              key={index}
              id={index}
              todo_text={e.inputValue}
              time={e.time}
              deleteTodo={handleDelete}
            />
          ))
        )}
      </div>
      <form className="input-field  d-flex justify-content-center my-1">
        <input
          type="text"
          className="todo-input-box  px-2 form-control"
          placeholder="Enter your TODO"
          onChange={handleChange}
          style={{ borderColor: 'gray' }}
          value={inputValue}
        />
        <button
          type="submit"
          value="Submit"
          className="btn btn-primary mx-1 py-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
