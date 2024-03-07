import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const todoCounter = useSelector((state) => state.todo);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TODO
          </a>
          <div className="counter-div">
            <span>
              <b>
                {' '}
                TODO: Total: {todoCounter.total} | Completed:{' '}
                {todoCounter.completed} | Pending:{' '}
                {todoCounter.total - todoCounter.completed}
              </b>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
