"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: true },
    { todoText: "todo 4", completed: false },
  ]);
  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setTodo("");
  };
  const deleteTodo = (deletedTodo:any) => {
    const newTodos = todos.filter((todo) => {
  if(todo.todoText == deletedTodo.todoText) return false;
  return true
    })
    console.log("old todos", todos, "newtodos",newTodos)
    setTodos(newTodos)
  };

  return (
    <>
    
      <div style={{
        textAlign:"center",
        marginBottom: "20px"
      
    }}><h2>Todo App</h2></div>
    <div style={{
      textAlign:"center"
    }}>  <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={(d) => {
          setTodo(d.target.value);
        }}
      /> 

      {/* Add Todo btn */}
      <button  onClick={addTodo}><TiPlus/></button></div>

{/* todos */}
    <ul style={{
      textAlign:"center"
    }}>
        {todos.map((eln) => {
          return (
            <li
              style={{
                color: eln.completed ? "green" : "red",
                fontStyle: "italic",
                listStyle: "none",
              }}
              key={eln.todoText}
            >
              <input
                type="checkbox"
                checked={eln.completed}
                onChange={() => onClickHandler(eln)}
              />
              {eln.todoText}
              <button onClick={()=>deleteTodo(eln)} style={{fontSize:"12px"}}> <RiDeleteBinLine/></button>
            </li>
          );
        })}
      </ul>

    </>
  );
}
