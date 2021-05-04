import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passConf, setPassConf] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passConfError, setPassConfError] = useState("");

    const handleFirstName = (e) => {
                setFirstName(e.target.value);
                if(e.target.value.length < 2) {
                    setFirstNameError("First Name must be at least 2 characters");
                } else {
                    setFirstNameError("");
                }
            }
    const handleLastName = (e) => {
                setLastName(e.target.value);
                if(e.target.value.length < 2) {
                        setLastNameError("Last Name must be at least 2 characters");
                } else {
                        setLastNameError("");
                }
            }
    const handleEmail = (e) => {
                setEmail(e.target.value);
                if(e.target.value.length < 5) {
                        setEmailError("Email must be at least 5 characters");
                } else {
                        setEmailError("");
                }
            }
    const handlePassword = (e) => {
                setPassword(e.target.value);
                if(e.target.value.length < 8) {
                        setPasswordError("Password must be at least 8 characters");
                } else {
                    setPasswordError("");
}
            }
    const handlePassConf = (e) => {
                setPassConf(e.target.value);
                if(e.target.value.length < 8) {
                        setPassConfError("Password Confirmation must be at least 8 characters");
                } else if (e.target.value != password) {
                    setPassConfError("Password and Password Confirmation must match");
                } else {
                    setPassConfError("");
                }
            }


    return(
        <div>
        <form >
            <div className="form">
                <label>First Name: </label> 
                <input className="input" type="text" onChange={ handleFirstName } value={ firstName } /> 
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> : 
                    ''
                }
            </div>
            <div className="form">
                <label>Last Name: </label> 
                <input className="input" type="text" onChange={ handleLastName } value={ lastName } />
                {
                    LastNameError ?
                    <p style={{color:'red'}}>{ LastNameError }</p> : 
                    ''
                }
            </div>
            <div className="form">
                <label>Email Address: </label> 
                <input className="input" type="text" onChange={ handleEmail } value={ email } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : 
                    ''
                }
            </div>
            <div className="form">
                <label>Password: </label>
                <input className="input" type="password" onChange={ handlePassword } value={ password } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> : 
                    ''
                }
            </div>
            <div className="form">
                <label>Password Confirmation: </label>
                <input className="input" type="password" onChange={ handlePassConf } value={ passConf } />
                {
                    passConfError ?
                    <p style={{color:'red'}}>{ passConfError }</p> : 
                    ''
                }
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