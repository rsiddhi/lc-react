import React, {useContext, useMemo} from 'react';
import {TodoContext} from "../Contexts/TodoContext";

function TodoItemRemaining(props) {

    const {todos, setTodos, todoId, settodoId} = useContext(TodoContext);

    function remainingCalculation() {
        return todos.filter(todo => todo.isComplete == false).length;
    }

    const remaining = useMemo(remainingCalculation, [todos]);
    return (
        <div className="todo-item-remaining">
            <span>{remaining} items remaining</span>
        </div>
    )

}

export default TodoItemRemaining;