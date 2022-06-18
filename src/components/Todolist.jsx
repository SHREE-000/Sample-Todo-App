import React, { useRef,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react"
import Navbar from "./Navbar";
import '../App.css';

const Todolist = () => {

    const todoArray = [];
    const [todo, setTodo] = useState(null)
    const [todoList, setTodoList] = useState([])
    const userInput = useRef()

    let userRefFunction = () => {
        userInput.current.focus()
      } 
    


    const inputFunction = (event) => {
        event.preventDefault()
        setTodo(event.target.value)
    }

    const submitFunction = (event) => {
        event.preventDefault()
        setTodoList([...todoList, todo])
        todoList.map((elem, key) => {
            if ((key + 1) === 5) {
                setTodoList([])
            }
        })
        setTodo(null)
        userInput.current.value = null;
    }

    const clrFunc = (event) => {
        event.preventDefault()
        setTodo(null)
        userInput.current.value = null;
    }

    useEffect( ()=> {
        userRefFunction()
      },[inputFunction, submitFunction, clrFunc])

  return (
    <div className="container mt-5 text-center">
        <Navbar />
    <div className="mb-3">     
        <input type="text"
        className="inputfield"
        ref={userInput}
        onChange={inputFunction} />
        <button className="btn btn-danger mx-1"
        onClick={clrFunc}>clr</button>
    </div>
    <div className="onchange">
    {todo}
    </div>
        
    <div className="mt-3 mb-5">     
        <button type="submit"
        className="btn btn-success" 
        onClick={submitFunction}>
            Add Todo List
            </button>
    </div>
    {todoList && todoList.map(
        (element, key) => {
                if (key + 1 === 5) {
                    return (
                        <div className="congrats">
                            <div>

                            Congrats You Have Added 5 Entries
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <ol className="orderedList">{element} --- {key+1}</ol>
                    )
                }
                            }
    )}
    </div>
  )
}

export default Todolist;