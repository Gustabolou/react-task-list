import React from 'react';

// Reusable component for a single task item
function TaskItem({ task, onRemove }) {
    return (
        <li className="task-item" onClick={onRemove}>
            {task.text}
        </li>
    );
};

export default TaskItem;