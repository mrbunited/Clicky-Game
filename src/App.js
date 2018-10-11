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
      charsIn: chars,
      comment: ""
  }



  // this is to shuffle the pictures
  shuffleImg = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

// this is to make state change to the charackter when the image is clicked
  checkoutChar = id => {
    const findChar = this.state.charsIn.find(item => item.id === id);

    if(findChar === undefined) {

        this.setState({ 
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            curScore: 0,
            chars: chars,
            charsIn: chars,
            comment: alert("You clicked twice. Game over. Try again")
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



}
    this.shuffleImg(chars);
};

  // Map over this.state.chars and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
                  
        <h1>Current Score : {this.state.curScore}</h1>
        <h1>Highest Score : {this.state.topScore}</h1>
        <Title>Death Note Memory Game</Title>
        {this.state.chars.map(chars => (
          <FriendCard
            checkoutChar={this.checkoutChar}
            id={chars.id}
            key={chars.id}
            image={chars.image}
          />  
        ))}

      </Wrapper>
    );
  }
}

export default App;
