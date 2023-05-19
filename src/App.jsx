// Reference: https://www.youtube.com/watch?v=Rh3tobg7hEo

import { useState, useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  //implement useEffect hook
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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

      {/* Render out codes from 'TodoLIst' class */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
