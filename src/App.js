import React from "react";
import Contribute from "./components/Contribute";
import Slogan from "./components/Slogan";
import Story from "./components/Story";
import logo from "./logo.svg";
import FirstSession from "./components/firstSession";
import MyNavBar from "./components/myNavbar";

function App() {
  return (
    <>
      <MyNavBar />
      <FirstSession />
      <Story />
    </>
  );
}

export default App;
