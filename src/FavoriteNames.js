import React from 'react';
import Name from './Name'


export default function FavoriteNames(props) {
    return (
        <div>

            Favorite names: {props.names.map((el, i) => <Name el={el} i={i} />)}

        </div>
    )
}