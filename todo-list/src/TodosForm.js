import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';


const TodosForm = () => {

    const [formData, setFormData] = useState({
        todo: ""
    })

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }));
    }

    const dispatch = useDispatch();

    const add = evt =>{
        evt.preventDefault();
        const key = uuid();
        dispatch({type:"ADD", payload: {key : key, todo: formData.todo }});
        setFormData({ todo : "" });
        document.querySelector("#todo").value = "";
    } 

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="todo">Todo: </label>
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        onChange={handleChange}
                        value={formData.value}
                    />
                </div>
                <button onClick={add} >Add</button>
            </form>
        </div>
    )

}

export default TodosForm;