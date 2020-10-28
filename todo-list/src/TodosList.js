import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";


const TodosList = () => {


    const todos = useSelector(store => store.todos);
    console.log(todos);
    const dispatch = useDispatch();



    return (
        <div className="TodosList">
            <h3>Todo List</h3>
            <ol>
            {todos.map( todo =>  (
              <Todo id={todo.key} key={todo.key} todo={todo.todo}/>
           ))}
            </ol>

        </div>
    )

}

export default TodosList;