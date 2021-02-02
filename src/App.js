import React from "react";
import Header from "./component/header/header";
import Main from "./component/main/main";
import Wrapper from "./component/wrapper/wrapper";
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
