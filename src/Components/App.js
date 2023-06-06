import { useState } from 'react';
import '../App.css';
import NoTodo from "./NoTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContext } from "../Contexts/TodoContext";
import React from "react";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish React Series',
            isComplete: false,
            isEditing: false,
        },
        {
            id: 2,
            title: 'Go Grocery',
            isComplete: false,
            isEditing: false,
        },
        {
            id: 3,
            title: 'Take over world',
            isComplete: false,
            isEditing: false,
        },
    ]);


    const [todoId, settodoId] = useState(4);

    return (
        <TodoContext.Provider value={{todos, setTodos, todoId, settodoId}}>
            <div className="todo-app-container">
                <TodoForm/>
                {todos.length > 0 ? (<TodoList />) : (<NoTodo/>)}
            </div>
        </TodoContext.Provider>
    );

}

export default App;
