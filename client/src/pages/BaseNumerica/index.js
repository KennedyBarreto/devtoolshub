import React, { useState } from "react";

const BaseNumerica = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [result, setResult] = useState("");

  const handleConvert = () => {
    try {
      const decimalValue = parseInt(inputValue, fromBase);
      const convertedValue = decimalValue.toString(toBase);
      setResult(convertedValue.toUpperCase());
    } catch (error) {
      setResult("Erro na conversão");
    }
  };

  return (
    <div>
      <h2>Conversor de Bases</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={`Insira um número na base ${fromBase}`}
      />
      <div>
        <label>De Base:</label>
        <select
          value={fromBase}
          onChange={(e) => setFromBase(Number(e.target.value))}
        >
          <option value={2}>Binário</option>
          <option value={8}>Octal</option>
          <option value={10}>Decimal</option>
          <option value={16}>Hexadecimal</option>
        </select>
      </div>
      <div>
        <label>Para Base:</label>
        <select
          value={toBase}
          onChange={(e) => setToBase(Number(e.target.value))}
        >
          <option value={2}>Binário</option>
          <option value={8}>Octal</option>
          <option value={10}>Decimal</option>
          <option value={16}>Hexadecimal</option>
        </select>
      </div>
      <button onClick={handleConvert}>Converter</button>
      <div>
        <strong>Resultado:</strong> {result}
      </div>
    </div>
  );
};

export default BaseNumerica;
