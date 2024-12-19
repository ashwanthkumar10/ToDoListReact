import React from 'react'
import ToDo from './ToDo'

function ToDoContainer({toDos , deleteToDo}) {
  return (
    <div className='container'>
     {toDos.map((toDo, index)=>
      <ToDo toDo={toDo } index = {index} deleteToDo={deleteToDo}/>
     )}
    </div>
  )
}

export default ToDoContainer
