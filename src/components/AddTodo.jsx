import { useState } from "react";
import { uid } from 'uid';
import "./AddTodo.css";
import { IoIosAddCircleOutline } from "react-icons/io";
const AddTodo = ({ addTodo }) =>
{  
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title)
            return;
        addTodo({ id: uid(), title, completed: false });
        setTitle("");

    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='input-form' >
            <input type="text" className='inputbox' placeholder='Enter your todo'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}    />
            <button type='submit'  className='addtsk-btn'>Add Task</button>
            </div>
        </form>
    )
}
export default AddTodo;