import React from 'react';

export default function ButtonFilterNames(props) {
    const sortByGender = () => {
        console.log(`show only ${props.gender} names`)
    }
    return (
        <div>
            <button onClick={sortByGender}> {props.gender}</button>
        </div>
    )
}