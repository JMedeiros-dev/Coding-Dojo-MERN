import react, { useState } from 'react';

    
const BoxGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxArr, setBoxArr] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        boxArr.push(boxColor);
        console.log(boxArr);
        setBoxColor("");
    };
    
    return (
        <div class="container">
        <form onSubmit={ handleSubmit }>
            <label id="label">Color</label>
            <input onChange={ (e) => setBoxColor(e.target.value )} value={ boxColor }>
            </input>
            <input type="submit" id="btn" value="Add" />
        </form>
        {boxArr.map( (color) => <div className="box" style={{backgroundColor: color}}></div> )}
    </div>
    );
};
    
export default BoxGenerator;