import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";
import Formulario from "./Formulario";

function App() {
  return (
    <div className="App">
      <h1>Que variedad de café prefieres?</h1>
      <Formulario />
      <Card />
    </div>
  );
}

export default App;
