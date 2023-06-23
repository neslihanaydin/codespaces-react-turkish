import React from "react";
import TodoItem from "./TodoItem";

const CompletedTodoList = ({ completedTodos }) => {
    return (
        <ul>
            {
            completedTodos.map((completedTodo, index) => (
                <TodoItem
                    key={index}
                    todo={completedTodo}
                />
            ))}
        </ul>
    );
};

export default CompletedTodoList;