import React, { useState } from 'react'
import  './Todo.scss'

const Todo = () => {

    const [ todo, setTodo] = useState('')

    const [ todoList, setTodoList ] = useState(['comer', 'dormir', 'trabajar','estudiar'])
    console.log(todoList)
  return (
  <div>
      <div className="c-title">   
       <h2 className="c-title--name">TodoList</h2>
</div>
    
<ul >
    {todoList.map((item,index)=> ( 

    <li key={index}>{item}  <button onClick={() =>  setTodoList(todoList.filter((item,index) => index !== 0)) }>Borrar Tarea</button>


</li>
    ))} 

</ul>


<label htmlFor="todo" >añadir nueva tarea</label>
<input type="text" id="todo" value={todo} onChange={(e) => setTodo(e.target.value) } 

/>


<button onClick={() =>  setTodoList([...todoList, todo]) }>Añadir</button>
    <button onClick={() =>  setTodoList([]) }>Borrar todo</button>

    
</div>


  )
}

export default Todo