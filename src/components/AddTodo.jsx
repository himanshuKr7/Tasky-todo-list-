import { useState } from "react";
import { uid } from 'uid';
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
            <div className='header justify-center flex gap-5' >
            <input type="text" className='py-2 px-8  w-2/4 rounded-md outline-none' placeholder='Enter your todo'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}    />
            <button type='submit'  className='bg-blue-700 px-4 py-2 rounded-md text-white'>Add Task</button>
            </div>
        </form>
    )
}
export default AddTodo;