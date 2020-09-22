import React from 'react';
import babyNamesData from './babyNamesData.json';
import Name from './Name'


function NamesSorted(props) {

    const addToFavNames = (el) => {
        console.log(el.name);

        props.addFav(el)
    }

    return (<div className="Names"> {
        babyNamesData
            .filter(function (el) {
                return el.name.toLowerCase().includes(props.value.toLowerCase());
            })
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map((el, i) => <Name el={el} i={i} handleClick={() => addToFavNames(el)} />
            )
    } </div>
    )
};

export default NamesSorted;