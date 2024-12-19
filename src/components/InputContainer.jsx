import React from 'react'

function InputContainer({inputVal,writeToDo, addToDos}) {
  return (
    <div className="input-container">
    <input type="text" placeholder="Enter a Task" value={inputVal} onChange={writeToDo} />
    <button onClick={addToDos}>ADD</button>
  </div>

  )
}

export default InputContainer
