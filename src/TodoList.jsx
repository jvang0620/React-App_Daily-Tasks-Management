import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {/* Use shrot circuiting: If not todo, message 'No Todos' will print */}
            {todos.length === 0 && "No List :("} 

            {todos.map(todo => {
                return (
                    <TodoItem 
                    {...todo}
                    key={todo.id} 
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}
