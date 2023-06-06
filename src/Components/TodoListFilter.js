import React from 'react';

function TodoListFilter(props) {
    return (
        <div className="inline-flex">
            <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${ props.filter == "All" ? 'bg-blue-300' : '' }`} onClick={() => {props.setFilter('All'); props.todoFilter('All');}}>
                All
            </button>
            <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${ props.filter == "Completed" ? 'bg-blue-300' : '' }`} onClick={() => {props.setFilter('Completed');props.todoFilter('Completed');}}>
                Completed
            </button>
            <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${ props.filter == "Remaining" ? 'bg-blue-300' : '' }`} onClick={() => {props.setFilter('Remaining'); props.todoFilter('Remaining');}}>
                Remaining
            </button>
        </div>
    );
}

export default TodoListFilter;