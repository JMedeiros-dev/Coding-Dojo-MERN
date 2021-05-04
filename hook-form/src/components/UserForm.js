import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passConf, setPassConf] = useState("");  


    return(
        <div>
        <form >
            <div className="form">
                <label>First Name: </label> 
                <input className="input" type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
            </div>
            <div className="form">
                <label>Last Name: </label> 
                <input className="input" type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
            </div>
            <div className="form">
                <label>Email Address: </label> 
                <input className="input" type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div className="form">
                <label>Password: </label>
                <input className="input" type="password" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div className="form">
                <label>Password Confirmation: </label>
                <input className="input" type="password" onChange={ (e) => setPassConf(e.target.value) } value={ passConf } />
            </div>
        </form>
        <p> Your Data Form</p>
        <p> First Name: {firstName}</p>
        <p> Last Name: {lastName}</p>
        <p> Email: {email}</p>
        <p> Password: {password}</p>
        <p> Password Confirmation: {passConf}</p>
        </div>
            );
        
};

export default UserForm;