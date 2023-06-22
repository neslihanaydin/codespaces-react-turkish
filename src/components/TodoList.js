import React from "react";

/*
TodoList adinda bir React bileseni olusturulur.
Bu bilesen, 'todos' ve 'deleteTodo' adinda iki tane prop kabul ediyor.
todos, bir dizidir 
deleteTodo, bir fonksiyondur
*/
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <ul>
            {// todos map ile todos dizisinde donguye girilir ve her bir todo
             // ogesi icin JSX ogesi olusturulur.
             // bu ogeler, listelenen gorevleri temsil eden <li> ogeleridir
            todos.map((todo, index) => (
                // key parametresi, React'te liste ogelerini render ederken
                // benzersiz olarak tanimasini ve guncellemelerini saglamasi icindir
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                    <button onClick={() => completeTodo(index)}>Mark as Completed</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;