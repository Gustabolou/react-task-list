import React, { useState, useEffect, useRef } from "react";
import TaskItem from "../components/TaskItem";

function MyComponent() {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef(null);

    // Load saved tasks from localStorage when component mounts
    useEffect(() => {
        const saved = localStorage.getItem("tasks");
        if (saved) setTasks(JSON.parse(saved));
    }, []);

    // Save to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add new task to the list
    function handleAddTask() {
        const text = inputRef.current.value.trim();
        if (!text) return; // Don't add empty tasks

        const newTask = { id: Date.now(), text };
        setTasks(prev => [...prev, newTask]);

        // Reset input and focus
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    // Remove task by id
    function handleRemoveTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    return (
        <div className="container">
            <h1>📝 Task List</h1>
            
            {/* Conditional rendering for empty state */}
            {tasks.length === 0 ? (
                <p>No tasks yet. Add one!</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onRemove={() => handleRemoveTask(task.id)}
                        />
                    ))}
                </ul>
            )}

            {/* Input section for adding new tasks */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Enter a new task"
                    ref={inputRef}
                    onKeyDown={e => e.key === "Enter" && handleAddTask()}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default MyComponent;