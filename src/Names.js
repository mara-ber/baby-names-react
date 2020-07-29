import React from 'react';
import babyNamesData from './babyNamesData.json';

const Names = () => {
    return (<div className="Names"> {
        babyNamesData.map(function (el, i) {
            if (el.sex === "m") {
                return <div className="NameM" key={i}> {el.name} </div>;
            }
            else {
                return <div className="NameF" key={i}> {el.name} </div>;
            }
        })
    } </div>)
}



export default Names;