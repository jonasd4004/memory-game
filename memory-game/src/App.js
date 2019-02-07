import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import Board from './components/Board';
import Shows from './shows.json';


class App extends Component {
  state = {
    message: "Click an image to start",
    score: 0,
    // images: [{ color: "red", index: 1 }, { color: "blue", index: 2 }, { color: "green", index: 3 },
    // { color: "yellow", index: 4 }, { color: "black", index: 5 }],
    images: [...Shows],
    clicked: []
  };

  handleImageClickById = (imageID) => {
    let clicked = this.state.clicked.slice(0);

    //is this imageID in clicked
    if (clicked.findIndex(item => imageID === item) === -1) {
      clicked.push(imageID);
      this.setState({
        "clicked": clicked,
        "score": this.state.score + 1
      });

    } else {
      // you lose, start over
      this.setState({
        "message": "You lose, start over",
        "score": 0,
        "clicked": []
      });
    }
    // rearrange images
    let images = this.state.images.slice(0);
    images.sort(() => Math.random() - 0.5);
    this.setState({ images });
    console.log("handling click for ", imageID);
  }

  render() {
    return (
      <div className="App">
        <Header
          message={this.state.message}
          score={this.state.score}
          total={this.state.images.length} />
        <Board
          images={this.state.images}
          clickHandler={this.handleImageClickById}
        />
      </div>
    );
  }
}

export default App;
