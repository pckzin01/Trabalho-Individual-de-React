import React from "react";
import Inserir from "./components/calcularIMC/Inserir";
import "./App.css";

export default function App() {
  return (
    <div>
      <header>
        <h1>&lt;Calcular IMC</h1>
      </header>
      <Inserir className="box" />
      <footer>
        <h1>/Desenvolvido por: Patrick&gt;</h1>
      </footer>
    </div>
  );
}
