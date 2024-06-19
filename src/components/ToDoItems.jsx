import React from 'react';
import './CSS/ToDoItems.css';
import tick from "./assets/tick.png";
import not_tick from "./assets/not_tick.png";
import cross from "./assets/cross.png";

const ToDoItems = ({no, display, text, setTodos}) => {

    const deLete = () => {
        let data = JSON.parse(localStorage.getItem("todo"));
        data = data.filter((todo) => todo.no!==no)
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todo"));
        for(let i=0; i<data.length; i++)
            {
                if(data[i].no === no)
                    {
                        if(data[i].display === "")
                            {
                                data[i].display = "line-through";
                            }
                            else
                            {
                                data[i].display = "";
                            }
                            break;
                    }
            }
        setTodos(data);
    }
  return (
    <div className='todoitems'>
      <div className={`todoitemsContainer ${display}`} onClick={() => {toggle(no)}}>
        {display === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}        
        <div className="todoitems_text">{text}</div>
      </div>
      <img className='todo_items_cross_icon' onClick={() => {deLete(no)}} src={cross} alt="" />
    </div>
  )
}

export default ToDoItems;
