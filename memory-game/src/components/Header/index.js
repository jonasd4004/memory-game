import React from 'react';

function Header(props) {
    return < >
        <nav className="navbar">
            <div className="title" style={{ fontSize: "30px" }}>Memory Game!</div>
            <div className="message">{props.message}</div>
            <div className="score">{props.score} of
                {props.total}</div>
        </nav>
        <br />
    </ >
}

export default Header;
