import React, { Component } from "react";

class RefreshQuote extends Component {
  render() {
    return (
      <div>
        <label>
          <b>
            <small>Select a Category</small>
          </b>
          <select>
            <option />
          </select>
          <button type="button">Refresh Quote</button>
        </label>
      </div>
    );
  }
}

export default RefreshQuote;