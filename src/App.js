import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="title">Create your ToDo list</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className="input__task"
      />
      <button onClick={handleAddTask} className="btn__task">
        Add Task
      </button>
      <ul className="list__task">
        {tasks.map((task, index) => (
          <li key={index} className="item__task">
            {task}
            <button
              onClick={() => handleRemoveTask(index)}
              className="btn__remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="section__main">
        {/* <li className="item">Get IELTS</li> */}
      </div>
      <div className="footer">
        <p className="text__footer">Created by </p>
        <p className="text__footer">Yusupaliyev Samandar</p>
      </div>
    </div>
  );
}

export default ToDoList;