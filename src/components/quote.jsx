import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Chuck Norris does rad stuff!"
    }
  render() {
    const { quote } = this.state;
    return (
      
        <p>Chuck Says...{quote}</p>
      
    );
  }
}

export default Quote;
