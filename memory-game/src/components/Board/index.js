import React from 'react';

function Board(props) {
    return <div id="board" >
        {props.images.map(image => (
            <div style={{ backgroundImage: "url('" + image.image + "')" }} className="image" id={"image-" + image.id} key={image.id} onClick={() => { props.clickHandler(image.id) }}></div>
        ))}
    </div>
}

export default Board;