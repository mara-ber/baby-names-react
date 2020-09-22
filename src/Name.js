import React from 'react';

const Name = (props) => {
    return (
        <div className={props.el.sex === "m" ? "NameM" : "NameF"} key={props.i}
            onClick={props.handleClick}> {props.el.name} </div>
    )
}

export default Name;