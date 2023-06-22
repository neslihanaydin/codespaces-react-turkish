import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  // todos bir durum degiskenidir ve mevcut yapilacaklar listesini temsil eder
  // setTodos ise todos stateini guncellemek icin kullanilan bir fonk
  // bu fonksiyon todos state'i guncellendiginde React'e bu degisikligi bildirir 
  // ve bilesenin yeniden render edilmesini saglar.
  const [todos, setTodos] = useState([]);

  // addTodo ve deleteTodo fonksiyonlarini App.js dosyasinda tanimlamamizin nedeni,
  // bu fonksiyonlarin todos stateini guncellemesi ve guncelleme isleminin App
  // App komponentinin sorumlulugunda olmasidir.
  const addTodo = (text) => {
    // ...todos , todos dizisinin tum elemanlarini yeni bir diziye yayar(spread).
    // setTodos ile todos dizisinin tum elemanlarini yeni bir diziye kopyalar,
    // sonra text degiskenini bu kopyalanan dizinin sonuna ekler.
    setTodos([...todos, text]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;