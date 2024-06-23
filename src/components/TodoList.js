import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, addTask, toggleCompletion, removeTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      addTask(newTaskText);
      setNewTaskText("");
    }
  };

  return (
    <div>
      <div className="add-task">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
