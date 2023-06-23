import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";


const App = () => {

  const [todos, setTodos] = useState([]);

  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, status: "incomplete" };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteCompletedTodo = (index) => {
    const newComTodos = [...completedTodos];
    newComTodos.splice(index, 1);
    setCompletedTodos(newComTodos);
  }

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = "completed";
    setCompletedTodos([...completedTodos, updatedTodos[index]]);
    deleteTodo(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      <h1>Completed Todo List</h1>
      <CompletedTodoList completedTodos={completedTodos} deleteTodo={deleteCompletedTodo} /> 
    </div>
  );
};

export default App;