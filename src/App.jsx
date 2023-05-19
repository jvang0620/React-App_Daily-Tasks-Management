import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
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

  return (
    <> 
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <lable htmlFor="item">New Item</lable>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
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
            <button className='btn btn-danger'>Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}
