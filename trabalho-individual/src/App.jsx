import React from "react";
import Inserir from "./components/calcularIMC/Inserir";
import "./App.css";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="cdt">&lt;Calcular IMC</h1>
      </header>
      <Inserir className="box"/>
      <footer>
        <h1 className="cdt">/Desenvolvido por: Patrick&gt;</h1>
      </footer>
    </div>
  );
}
