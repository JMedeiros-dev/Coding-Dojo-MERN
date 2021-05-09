import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = (props) => {
    const {list, setList} = props;
    let task = {
        name: "",
        isComplete: false
    };

    const onChange = e => {
        task.name = e.target.value;
    };

    const onClick = e => {
        setList([...list, task]);
        e.target.value = "";
        task = "";
    }

    return(
        <div className="container w-25 mt-4">
            <input className="form-control" type="text" placeholder="Task..." name="task" onChange={onChange} />
            <button className="btn btn-primary w-100 mt-2" onClick={ onClick } >Add</button> 
        </div>
    )
}

export default Input;