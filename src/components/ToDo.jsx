import React from 'react'

function ToDo({toDo ,index , deleteToDo }) {
  return (
    <div className='todo'>
        <p>{toDo}</p>
      <div className='actions'> <input type="checkbox" /> 
      <button onClick={()=>deleteToDo(index)}>delete</button>
      </div>
    </div>
  )
}

export default ToDo
