import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Fetching a quote..."
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                quote: "Chcuk Norris hates your rules"
            })
            
        }, 2000);
        
    }
  render() {
    const { quote } = this.state;
    return (
      
        <p>Chuck Says...{quote}</p>
      
    );
  }
}

export default Quote;
