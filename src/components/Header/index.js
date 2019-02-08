import React from 'react';

function Header(props) {
    return < >
        <nav className="navbar">
            <div className="title" style={{ fontSize: "30px" }}>Memory Game!</div>
            <div className="message" style={{ fontSize: "30px"}}>{props.message}</div>
            <div className="score" style={{ fontSize: "30px"}}>{props.score} of
                {props.total}</div>
        </nav>
        <br />
    </ >
}

export default Header;
