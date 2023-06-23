import React from "react";
import TodoItem from "./TodoItem";

const CompletedTodoList = ({ completedTodos, deleteTodo }) => {
    return (
        <ul>
            {
            completedTodos.map((completedTodo, index) => (
                <TodoItem
                    key={index}
                    todo={completedTodo}
                    deleteTodo={() => deleteTodo(index)}
                />
            ))}
        </ul>
    );
};

export default CompletedTodoList;