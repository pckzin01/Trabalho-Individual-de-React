import React from "react";

export default function Calculo({ peso, altura }) {

  function CalcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
  }

  function RespostaIMC(imc) {
    if (imc < 18.5) {
      return "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Eutrofia (peso adequado)";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade extrema";
    }
  }

  const imc = CalcularIMC(peso, altura);

  return (
    <div>
      <p>Seu IMC é: {imc.toFixed(2)}</p>
      <p>Classificação: {RespostaIMC(imc)}</p>
    </div>
  );
}
