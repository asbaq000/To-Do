import React from 'react';

const TodoItem = ({ task, toggleCompletion, removeTask }) => {
  const handleToggleCompletion = () => {
    toggleCompletion(task.id);
  };

  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span className="task-text">{task.text}</span>
      <div className="actions">
        <button onClick={handleToggleCompletion}>
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={handleRemoveTask}>Remove</button>
      </div>
    </li>
  );
};

export default TodoItem;
