import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import chars from "./chars.json";
import "./App.css";



class App extends Component {
  state = {
      topScore: 0,
      curScore: 0,
      chars: chars,
      charsIn: chars
  }

  componentDidMount() {
  }


  // this is to shuffle the pictures
  shuffleImg = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }


  checkoutChar = id => {
    const findChar = this.state.charsIn.find(item => item.id === id);

    if(findChar === undefined) {

        this.setState({ 
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            curScore: 0,
            chars: chars,
            charsIn: chars
        });
    }
    else {

        const newchars = this.state.charsIn.filter(item => item.id !== id);
        
        this.setState({ 
            curScore: this.state.curScore + 1,
            chars: chars,
            charsIn: newchars
        });
    }

    this.shuffleImg(chars);
};

  // Map over this.state.chars and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Death Note Memory Game</Title>
        {this.state.chars.map(chars => (
          <FriendCard
            checkoutChar={this.checkoutChar}
            id={chars.id}
            key={chars.id}
            image={chars.image}
          />  
        ))}
        
        <h1>Current Score : {this.state.curScore}</h1>
        <h1>Highest Score : {this.state.topScore}</h1>
      </Wrapper>
    );
  }
}

export default App;
