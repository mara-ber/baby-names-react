import React, { useState } from 'react';
import babyNamesData from './babyNamesData.json';


function Search() {
    const [value, setValue] = useState("");
    //console.log(value);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input
                onChange={handleChange}
                value={value}
                type="search"
                placeholder="Search">
            </input>
            <div className="Names"> {
                babyNamesData
                    .filter(function (el) {
                        return el.name.toLowerCase().includes(value.toLowerCase());
                    })
                    .sort((a, b) => a.name > b.name ? 1 : -1)
                    .map(function (el, i) {
                        if (el.sex === "m") {
                            return <div className="NameM" key={i}> {el.name} </div>;
                        }
                        else {
                            return <div className="NameF" key={i}> {el.name} </div>;
                        }
                    })
            } </div>
        </div>

    );

}

export default Search;