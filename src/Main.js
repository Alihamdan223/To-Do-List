import {useEffect} from "react";

const Main = ({tasks, newTask, setNewTask, handleSubmit, handleDelete, handleCheck}) => {

    useEffect(() => {
        localStorage.setItem("newItems", JSON.stringify(tasks));
    }, [tasks]); 

    return (
        <main>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} 
            placeholder="What are you up to?" className="add-input" />
            <button onClick={handleSubmit} className="add-button">Add</button>
            {!tasks.length && <h1 style={{textAlign: 'center', fontWeight: '500',
            marginTop: 'auto', marginBottom: 'auto'}}>List Is Empty</h1>}
            <ul className="task-list">
                {tasks.map((task) => {
                    return <li key={task.id} className="tasks">
                              <input type="checkbox" className="check-box" checked={task.checked}
                              onChange={() => handleCheck(task.id)} />
                              <label>{task.task}</label>
                              <button
                              onClick={() => handleDelete(task.id)} className="delete-button">Delete</button>
                            </li>
                })}
            </ul>
       </main>
    )
}

export default Main;