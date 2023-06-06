import React, {useState, useContext} from 'react';
import {TodoContext} from "../Contexts/TodoContext";

function TodoForm(props) {
    const [todoInput, settodoInput] = useState('');
    const {todos, setTodos, todoId, settodoId} = useContext(TodoContext);

    function handleInput(event) {

        settodoInput(event.target.value);
    }

    function addTodo(event) {

        event.preventDefault();

        if(todoInput.trim().length == 0) return;

        setTodos([...todos, {
            id:todoId,
            title: todoInput,
            isComplete: false,
            isEditing: false,
        }]);

        settodoId(prevtodoId => prevtodoId+1);

        settodoInput('');
    }

    return (
        <form action="#" onSubmit={(event ) => addTodo(event)}>
            <input
                className="my-3 px-2 w-3/4 border border-gray-400 rounded"
                value={todoInput}
                onChange={handleInput}
                name="todo"/>
        </form>
    );
}

export default TodoForm;