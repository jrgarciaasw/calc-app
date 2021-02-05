// IMPORTACION
import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"


// GENERACION
const Functions = ({
    onContentClear,
    onDelete
}) => (
    // section.functions>Button*2 tabs
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete}/>
    </section>
    )

// VALIDACION
Functions.prototype = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

// EXPORTACION
export default Functions