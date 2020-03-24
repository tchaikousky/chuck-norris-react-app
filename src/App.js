import React from "react";
import Quote from "./components/quote";
import RefreshQuote from "./components/refreshQuote";


export default function App() {
  return (
    <div className="App">
      <h1>Chuck 2020</h1>
      <Quote />
      <RefreshQuote />
    </div>
  );
}
