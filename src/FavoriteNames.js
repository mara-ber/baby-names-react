import React from 'react';


export default function FavoriteNames(props) {
    return (
        <div>

            Favorite names: {props.names.map(function (el, i) {
            // if (el.sex === "m") {
            return <div key={i}> <p> {el} </p>  </div>;
            // }
            // else {
            //     return <div className="NameF" key={i}> {el.name} </div>;
            // }
        })}

        </div>
    )
}