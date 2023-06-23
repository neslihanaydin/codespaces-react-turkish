import React from "react";

const TodoItem = ( {todo, deleteTodo, completeTodo }) => {
    
    const handleDelete = () => {
        deleteTodo();
      };
    
    const handleComplete = () => {
        completeTodo();
    }
    return (
        <li>
        <span>{todo}</span>
        <button onClick={handleComplete}>Mark as Completed</button>
        <button onClick={handleDelete}>Delete</button>
        </li>
        
    );
};

export default TodoItem;