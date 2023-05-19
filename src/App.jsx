import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  //ToggleTodo function when user select check marks
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        //check which 'todo' do I want to change
        if (todo.id == id) {
          //return updated version of that
          return { ...todo, completed}
        }

        //if no changes, return todo
        return todo
      })
    })
  }

  //deleteTodo function
  function deleteTodo(id) {
    //use all current todos 
    setTodos(currentTodos => {
      //take currentTodos and filter them
      //return all currentTodos except the one being removed
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  return (
    <> 
      {/* Rendering codes from "NewTodoForm" class */}
      {/* Pass down props */}
      <NewTodoForm  onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>
      <ul className="list">

        {/* Use shrot circuiting: If not todo, message 'No Todos' will print */}
        {todos.length === 0 && "No Todos"} 

        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label>

              <input type="checkbox" checked={todo.completed} 

              //on change eventlistenr 
              //when change check to uncheck, it will call 'toggleTodo' 
              //and from a todo id and pass along whether or not it is check
              onChange={e => toggleTodo(todo.id, e.target.checked)}/>

              {todo.title}

            </label>
            <button 
            onClick={() => deleteTodo(todo.id)} 
            className='btn btn-danger'
            >
              Delete
            </button>
          </li>
          )
        })}
      </ul>
    </>
  )
}
