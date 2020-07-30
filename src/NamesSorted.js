import React from 'react';
import babyNamesData from './babyNamesData.json';


// function compare(a, b) {
//     const showA = a.name.toUpperCase();
//     const showB = b.name.toUpperCase();

//     let comparison = 0;
//     if (showA > showB) {
//         comparison = 1;
//     } else if (showA < showB) {
//         comparison = -1;
//     }
//     return comparison;
// }


const NamesSorted = () => {
    return (<div className="Names"> {
        babyNamesData
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
    )
};


export default NamesSorted;