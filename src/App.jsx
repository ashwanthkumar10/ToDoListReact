
import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import ToDoContainer from './components/ToDoContainer'

function App() {
      const [inputVal , setInputval] = useState('')

      const [toDos , setToDos] = useState([])

      //this function will write the task from the input element
      function writeToDo(e) {
        setInputval(e.target.value)
        // console.log(e.target.value);
       }
      //Add the specific task to the container
       function addToDos()
       {
        if(inputVal!='')
        {
          setToDos((prevToDo => [...prevToDo, inputVal]))
          setInputval('')
        }
       }

       //Delete the task

       function deleteToDo(toDoIndex)

       {
                setToDos((prevToDo)=>
                prevToDo.filter((prevToDo , prevToDoIndex)=>{
                  return prevToDoIndex != toDoIndex
                }))
       }

       
       
  return (
    
    
     
      <main>
      <h1>To Do List</h1>
      <InputContainer inputVal = {inputVal} writeToDo = {writeToDo} addToDos = {addToDos}/>
      <ToDoContainer toDos={toDos} deleteToDo={deleteToDo}/>

    
    
      </main>
     

  )
}

export default App
