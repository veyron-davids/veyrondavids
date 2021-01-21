import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Main from "./Components/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Title />
      <Main />
    </div>
  );
}

export default App;
