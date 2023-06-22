import React from "react";

const CompletedTodoList = ({ completedTodos }) => {
    return (
        <ul>
            {
            completedTodos.map((completedTodo, index) => (
                <li key={index}>
                    {completedTodo}
                </li>
            ))}
        </ul>
    );
};

export default CompletedTodoList;