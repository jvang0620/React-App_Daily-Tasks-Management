import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")

  return (
    <> 
      <from className="new-item-form">
        <div className="form-row">
          <lable htmlFor="item">New Item</lable>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </from>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      
        <li>
          <label>
            <input type="checkbox"/>
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  )
}
