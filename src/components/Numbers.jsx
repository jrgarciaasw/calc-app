// IMPORTACION
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// GENERACION
const numbersArray = [7,8,9,4,5,6,1,2,3,0]


const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return  numbersArray.map(renderButton)

}
const Numbers = ({ onClickNumber }) => (
  //section.numbers>Button*10 tabs
  <section className="numbers">
    {
        renderButtons(onClickNumber)
    }
  </section>
);

// VALIDACION
Numbers.prototype = {
  onClickNumber: PropTypes.func.isRequired,
};

// EXPORTACION
export default Numbers;
