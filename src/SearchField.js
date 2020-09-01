import React, { useState } from 'react';
//import babyNamesData from './babyNamesData.json';
import NamesSorted from './NamesSorted.js';
import FavoriteNames from './FavoriteNames';
import ButtonFilterNames from './ButtonFilterNames'


function SearchField() {
    const [value, setValue] = useState("");
    const [favNames, setFavNames] = useState([]);

    function handleChange(event) {
        setValue(event.target.value);
    }

    const favNamesList = (newName) => {
        setFavNames([...favNames, newName])
    }

    return (
        <div>
            <input
                onChange={handleChange}
                //value={value}
                type="search"
                placeholder="Search">
            </input>
            <div>
                <ButtonFilterNames gender="male" />
                <ButtonFilterNames gender="female" />
            </div>
            <div className="Names">
                <FavoriteNames names={favNames} />
                <NamesSorted value={value} addFav={favNamesList} />
            </div>
        </div>

    );

}

export default SearchField;