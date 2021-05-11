import React, { useState} from 'react';
import { navigate } from '@reach/router'

const Search = props => {
    const [form, setForm] =useState({
        select: "people",
        id: 1
    })

    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.data(form);
        navigate('/' + form.select + '/' + form.id);
    };

    return(
        <div className="container mt-4">
            <h2>Search for your favorite Star Wars character, planet, or starship!</h2>
            <form className="row row-cols-lg-auto g-3 align-items-center mt-2" onSubmit={onSubmitHandler}>
                <div className="col-12">
                    <select className="form-select" name="select" onChange={onChangeHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                </select>
                </div>
                <div className="col-12">
                    <input type="number" className="form-control col-2" name="id" placeholder="ID" onChange={onChangeHandler} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
            
        </div>
    );
}

export default Search;