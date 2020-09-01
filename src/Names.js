import React, { useState } from 'react';
import babyNamesData from './babyNamesData.json';

const Names = () => {
    const [names, setNames] = useState({});
    function loadNames() {
        setNames(babyNamesData)
    }

    return (<div onLoad={loadNames} className="Names"> {
        names.map(function (el, i) {
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