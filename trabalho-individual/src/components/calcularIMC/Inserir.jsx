import React, { useState } from "react";
import Calculo from "./Calculo";

export default function Inserir() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [calcular, setCalcular] = useState(false);

  const pesoN = parseFloat(peso);
  const alturaN = parseFloat(altura);

  function inserirDado(e) {
    e.preventDefault();

    if (!pesoN || pesoN <= 0) {
      alert("Por favor, insira um peso válido.");
      return;
    }

    if (!alturaN || alturaN <= 0) {
      alert("Por favor, insira uma altura válida.");
      return;
    }

    setCalcular(true);
  }

  function handlePesoChange(e) {
    setPeso(e.target.value);
    setCalcular(false);
  }

  function handleAlturaChange(e) {
    setAltura(e.target.value);
    setCalcular(false);
  }

  return (
    <div className="box">
      <form onSubmit={inserirDado}>
        <label>Peso: </label>
        <input
          type="text"
          placeholder="Preencha o peso"
          name="peso"
          onChange={handlePesoChange}
          autoComplete="off"
        />
        <label>Altura: </label>
        <input
          type="text"
          placeholder="Preencha a altura"
          name="altura"
          onChange={handleAlturaChange}
          autoComplete="off"
        />
        <button type="submit">Calcular</button>
        {calcular && (
          <Calculo peso={parseFloat(peso)} altura={parseFloat(altura)} />
        )}
      </form>
    </div>
  );
}
