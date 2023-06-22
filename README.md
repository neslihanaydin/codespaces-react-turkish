# GitHub Codespaces ♥️ React

This project was bootstrapped for you with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

# About REACT

Todo Application, olusturma asamalari.

## Components:
Todo Application icin 2 adet component tanimlanmistir.
TodoForm.js, TofoList.js

<b> TodoForm.js </b>

```javascript
import React, { useState } from "react";
```
React ve useState modulleri import edilmistir. useState kullanimi ile uygulamada kullanilacak degisken tanimlanir. useState hook'u kullanilarak tanimlanan bir degiskene ulasilabilir veya degeri guncellenebilir.

Asagida value adinda bir state degiskeni tanimlanmistir. value ismi ile degerine ulasilabilir, setValue cagirildiginda icindeki parametreyi value'ye atar.
```javascript
const TodoForm = ({ addTodo }) => {
    // useState hooku kullanilarak bir state degiskeni ve , guncellemek icin fonksiyion olustur
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                // input alanindaki deger value degiskenine baglanir.
                value={value}
                // onChange event handler ile bu deger guncellenir, ve metin her degistiginde value degiskeni guncellenir.
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new todo..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
```
<hr> 

```javascript
const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
``` 
Yukarida value degiskeni dogrudan kullanilabilir. Ancak return kisminda geri dondurulen veri html oldugu icin javascript kodlari {} icerisinde yazilmalidir. Bu sebeple asagidaki value atamasi {} icerisinde cagrilmistir.
```javascript
return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ...
``` 

<b> TodoList.js </b>

TodoList.js dosyasinda TodoList adinda bir react bileseni olusturulur. Bu bilesen todos ve deleteTodo adinda iki adet prop kabul eder.

```javascript
import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
            todos.map((todo, index) => (
                // key parametresi, React'te liste ogelerini render ederken
                // benzersiz olarak tanimasini ve guncellemelerini saglamasi icindir
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
```

todos propunun bir dizi olmasi gerekmektedir. Bu parametre gonderimi App.js icerisinden saglanmistir. deleteTodo propu da bir parametre alan bir fonksiyondur. Bu parametrelerin saglanmasi ve deleteTodo fonksiyonunun icerigi App.js icerisinde yapilmistir.

```javascript
//App.js
const App = () => {
  
  const [todos, setTodos] = useState([]);
    ...
  const deleteTodo = (index) => {
    ...
    ...
  };

  return (
    <div>
      ..
      ..
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
```

todos map ile todos dizisinde donguye girilir ve her bir todo ogesi icin JSX ogesi olusturulur.
Bu ogeler, listelenen gorevleri temsil eden li ogeleridir.

```javascript
todos.map((todo, index) => (
                // key parametresi, React'te liste ogelerini render ederken
                // benzersiz olarak tanimasini ve guncellemelerini saglamasi icindir
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))
```

Bu sayede her bir todo icin todo ve delete button'i eklenir.
![Alt text](img_todo_button.png)

