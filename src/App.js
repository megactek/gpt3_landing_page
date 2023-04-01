import React from "react";
import {
  Blog,
  Footer,
  Possibility,
  Features,
  Whatgpt3,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default App;
