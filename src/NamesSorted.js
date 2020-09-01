import React from 'react';
import babyNamesData from './babyNamesData.json';



function NamesSorted(props) {

    const addToFavNames = (event) => {
        //console.log(el.name);

        props.addFav(event.target.innerText)
    }

    return (<div className="Names"> {
        babyNamesData
            .filter(function (el) {
                return el.name.toLowerCase().includes(props.value.toLowerCase());
            })
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map(function (el, i) {
                if (el.sex === "m") {
                    return <div className="NameM" key={i} onClick={addToFavNames}> {el.name} </div>;
                }
                else {
                    return <div className="NameF" key={i} onClick={addToFavNames}> {el.name} </div>;
                }
            })
    } </div>
    )
};


export default NamesSorted;