import React, { useEffect, useRef, useState } from 'react';
import "./CSS/ToDo.css";
import ToDoItems from './ToDoItems';

let count = 0;
const ToDo = () => {
    const [todo, setTodos] = useState([]);
    
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todo, {no:count++, text:inputRef.current.value, display:""}]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count", count)
    }

    useEffect(() => {
            setTodos(JSON.parse(localStorage.getItem("todo")))
            count = localStorage.getItem("todos_count")
        }, [])

    useEffect(() => {        
        setTimeout(() => {
            console.log(todo);
            localStorage.setItem("todo", JSON.stringify(todo))
        }, 100)
    }, [todo])

  return (
    <div className='todo'>
      <div className="todo_header">
        To_Do List
      </div>
      <div className="todo_add">
        <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo_input' />
        <div onClick={() => {add()}} className="todo_add_btn">ADD</div>
      </div>
      <div className="todo_list">
        {todo.map((item, index) => {
            return  <ToDoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        })}
      </div>
    </div>
  )
}

export default ToDo
