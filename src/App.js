import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";


const App = () => {

  const [todos, setTodos] = useState([]);

  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    setCompletedTodos([...completedTodos, todos[index]]);
    deleteTodo(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      <h1>Completed Todo List</h1>
      <CompletedTodoList completeTodos={completedTodos} /> 
    </div>
  );
};

export default App;