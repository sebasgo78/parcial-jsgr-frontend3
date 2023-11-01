import React, { useState } from "react";
import Card from "./Card";
import "./Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.input1.length < 3 ||
      formData.input1.trim() === "" ||
      formData.input2.length < 6
    ) {
      setError("Por favor, chequea que la información sea correcta");
    } else {
      setError("");
    }
  };

  return (
    <div className="formulario-container, formulario-content">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Ingresa tu nombre: </label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            className="formulario-input"
          />
        </div>
        <div>
          <label htmlFor="input2">Ingresa la variedad de café: </label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
            className="formulario-input"
          />
        </div>
        <button type="submit" className="submit-button">
          ENVIAR
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {error ? null : <Card formData={formData} />}
    </div>
  );
}

export default Formulario;
