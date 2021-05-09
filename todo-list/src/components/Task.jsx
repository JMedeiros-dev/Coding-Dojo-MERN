import React from "react";

const Task = props => {
    const {task, index, list, setList } = props;
    
    const onClick = () => {
        setList(() => {
           return list.filter(task => list.indexOf(task) !== index);
        });   
    };

    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div className="container mt-4 d-flex justify-content-center align-items-center">
            <h3 style={{textDecoration: list[index].isComplete ===true ? "line-through" : "none"}}>{task.name}</h3>
            <label htmlFor="checkbox" className="ms-4">Completed?</label>
            <input type="checkbox" onChange={onChange} className="ms-2" name="checkbox" checked={task.isComplete} />
            <button className="btn btn-sm btn-dark ms-4" onClick={onClick}>Delete</button>
        </div>
    );

}

export default Task;