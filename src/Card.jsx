import React from "react";

function Card({ formData }) {
  return (
    <div>
      <h2>Información ingresada:</h2>
      {formData && (
        <div>
          <p>Nombre: {formData.input1}</p>
          <p>Variedad: {formData.input2}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
