import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

const Todo = ({id, todo}) => {

    const dispatch = useDispatch();

    const remove = evt => {
        evt.preventDefault();
        const target = evt.target.parentNode.dataset.id;
        console.log(target);
        dispatch({type:"DELETE", payload: {key : target }});
    }

    return (
        <li data-id={id}>
                <p>{todo}</p>
                <span onClick={remove}>X</span>
        </li>
    )

}

export default Todo;