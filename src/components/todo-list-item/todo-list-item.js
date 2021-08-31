import React from 'react';

import './todo-list-item.css';

const TodoListItem =({label,
                      onDeleted,
                      onToggleImportant,
                      onToggleDone,
                      important,
                      done}) => {

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onToggleDone}>

        {label}
      </span>

        <span className="todo-list-item-button">
      <button type="button"
              className="btn btn-outline-success btn-sm"
              onClick={onToggleImportant}>
      <i className="bi bi-exclamation-circle"></i>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm "
               onClick={onDeleted}>
        <i className="bi bi-trash"></i>
      </button>
        </span>
    </span>
        );

}

export default TodoListItem;
