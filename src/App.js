import React from "react";
import Header from "./component/header";
import Main from "./component/main";
import Wrapper from "./component/wrapper";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
