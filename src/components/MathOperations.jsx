// IMPORTACION
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button"

// GENERACION DE LOGGICAL
const MathOperations = ({
    onClickOperation,
    onClickEqual
}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

// VALIDACION

MathOperations.prototype = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

//EXPORTACION
export default MathOperations