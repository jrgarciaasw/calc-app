// IMPORTACION
import React from "react";
import PropTypes from "prop-types";

// GENERACION
const Result = ({ value }) => <div className="result">{value}</div>;

// VALIDACION
Result.propTypes = {
  value: PropTypes.string.isRequired,
};
Result.defaultProps = {
  value: "0",
};

// EXPORTACION
export default Result;
