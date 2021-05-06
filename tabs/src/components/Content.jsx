import React from 'react';

const Content = (props) => {

    
    return(
        <div className="contentBox">
            <p className="contentContent">{props.content.content}</p>
        </div>
    );
}

export default Content;