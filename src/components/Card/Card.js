import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <span onClick={() => props.removeFriend(props.id)} className="remove">
                𝘅
        </span>
        </div>
    );
}

export default Card;
