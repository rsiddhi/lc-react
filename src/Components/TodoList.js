import React, { useState, useContext} from 'react';
import TodoItemRemaining from "./TodoItemRemaining";
import TodoClearCompleted from "./TodoClearCompleted";
import TodoListFilter from "./TodoListFilter";
import {TodoContext} from "../Contexts/TodoContext";

function TodoList(params) {
    const {todos, setTodos, todoId, settodoId} = useContext(TodoContext);
    const [filter, setFilter] = useState('All');

    function markAsEditing(id) {
        var updatedTodos = todos.map(todo => {
            if (todo.id == id) {
                todo.isEditing = !todo.isEditing;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function markDone(id) {
        var updatedTodos = todos.map(todo => {
            if (todo.id == id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function updateTodo(event, id) {

        var updatedTodos = todos.map(todo => {
            if (todo.id == id) {
                if (event.target.value.trim().length == 0) {
                    todo.isEditing = false;
                    return todo;
                }

                todo.title = event.target.value;
                todo.isEditing = false;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function todoFilter(filter) {
        if(filter == 'All') {
            return todos;
        } else if(filter == 'Completed') {
            return todos.filter(todo => todo.isComplete == true);
        } else if(filter == 'Remaining') {
            return todos.filter(todo => !todo.isComplete == true);
        }
    }


    return (
        <>
        <ul className="todo-list">
            {todoFilter(filter).map((todo, index) => (
                <li key={todo.id} className="todo-item-container">
                    <div className="todo-item">
                        <input type="checkbox" onChange={() => markDone(todo.id)}/>
                        { !todo.isEditing ? (
                            <span className={`todo-item-label px-2 ${todo.isComplete ? "line-through" : ""}`} onDoubleClick={() => markAsEditing(todo.id)}>{todo.title}</span>
                        ) : (
                            <input
                                className="todo-item-input border rounded border-gray-400 m-2 px-2"
                                defaultValue={todo.title}
                                onBlur={(event) => updateTodo(event, todo.id)}
                                onKeyDown={(event) => {
                                    if(event.key == 'Enter') {
                                        updateTodo(event, todo.id);
                                    } else if (event.key == 'Escape'){
                                        markAsEditing(todo.id);
                                    }
                                }}
                                autoFocus
                            />
                        )}

                        <button className="text-red-600" onClick={() => removeTodo(todo.id)}> X</button>
                    </div>
                </li>
            ))}
        </ul>
        <TodoClearCompleted />
        <TodoItemRemaining />
        <TodoListFilter filter={filter} setFilter={setFilter} todoFilter={todoFilter} />
    </>
    );
}

export default TodoList;