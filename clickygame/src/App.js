import React, { Component }from "react";
import Image from "./components/Image";
import Header from "./components/Header";
import Container from "./components/Container";
import images from "./images.json"
import original from "./original.json"

class App extends Component {
  state = {
    currentScore: 0, 
    topScore: 0,
    images,
    original
  }

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({currentScore : this.state.currentScore + 1});
          this.state.images.sort(() => Math.random() - 0.5)
          
          return true;
        } else {
          this.gameOver();
          console.log("gameOver");
        }
      }
      return false;
    });
  }

  gameOver = () => {
    if(this.state.currentScore>=this.state.topScore){
      this.setState({topScore : this.state.currentScore});
    }
    this.setState({currentScore: 0});
    
    images.forEach(element => {
      element.count = 0;
    });
    

  }

  render() {
    return (
    <Container>
      <Header
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        >
      </Header>
      {this.state.images.map(image => (
        <Image
        key={image.id}
        clickCount={this.clickCount} 
        id={image.id}
        image={image.image}
        count={image.count}
        />
      ))}
      
        
      
    </Container>
    )
  }
}



export default App;
