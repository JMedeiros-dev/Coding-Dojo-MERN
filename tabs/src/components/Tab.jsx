import React from 'react';

const Tab = ({tab, setContent}) => {

    const handleClick = (e, item) => {
        setContent({
        content: item.content
    });
}

    return(
        <>
            {tab.map( (item, i) => 
        <button className="btn" id="btn" onClick={(e) => handleClick(e, item)} key={i} >{item.label}</button>
            )}
        </>
    );
}

export default Tab;