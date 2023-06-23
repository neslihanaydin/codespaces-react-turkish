import React from "react";
import TodoItem from "./TodoItem";
/*
TodoList adinda bir React bileseni olusturulur.
Bu bilesen, 'todos' ve 'deleteTodo' adinda iki tane prop kabul ediyor.
todos, bir dizidir 
deleteTodo, bir fonksiyondur
*/
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <ul>
            {
            todos.map((todo, index) => (
            <TodoItem
                key={index}
                todo={todo}
                deleteTodo={() => deleteTodo(index)}
                completeTodo={() => completeTodo(index)}
            />
            ))}
        </ul>
    );
};

export default TodoList;