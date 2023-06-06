import React, { useContext} from 'react';
import { TodoContext } from "../Contexts/TodoContext";

function TodoClearCompleted() {
    const {todos, setTodos, todoId, settodoId} = useContext(TodoContext);

    function clearCompleted() {
        var updatedTodos = todos.filter(todo => todo.isComplete == false);
        setTodos(updatedTodos);
    }

    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded" onClick={() => clearCompleted()}>Clear Completed</button>
    );
}

export default TodoClearCompleted;