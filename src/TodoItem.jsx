export function TodoItem( {completed, id, title, toggleTodo, deleteTodo} ) {
    return (
        <li>
            <label>
                <input 
                type="checkbox" 
                checked={completed} 

                //on change eventlistenr 
                //when change check to uncheck, it will call 'toggleTodo' 
                //and from a todo id and pass along whether or not it is check
                onChange={e => toggleTodo(id, e.target.checked)}
                />

                {title}

            </label>
            <button 
                onClick={() => deleteTodo(id)} 
                className='btn btn-danger'
            >
            Delete
            </button>
        </li>
   )
}