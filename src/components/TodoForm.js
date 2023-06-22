import React, { useState } from "react";

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