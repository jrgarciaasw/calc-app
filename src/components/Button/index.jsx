// IMPORTACION
import React from "react";
import PropTypes from "prop-types";
import "./Button.css"

// GENERACION DE LOGICAL
// type = button-long-text
const Button = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);

//VALIDACION
Button.protoType = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

//EXPORTACION
export default Button;
