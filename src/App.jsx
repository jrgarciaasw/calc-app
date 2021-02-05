/* eslint no-eval: 0 */
// IMPORTACION
import React, { useState } from "react";
import words from "lodash.words"
import Functions from "./components/Functions"
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"
import Result from "./components/Result"
import './App.css'


// GENERACION
// de la funcion del componente funcion flecha
// const App --Primera Mayuscula -- = (--aqui van parametros --) => { -- el retorno -- }
// el llamado App()
const App = () => { // que ejecuta la funcion
    // ArrayDestructuring
    // [xxx] [SetXxx]
    const [textoStack, setTextoStack] = useState("")
    // const arrayTextoFuncionModificaTexto = useState ("")
    // const texto = arrayTextoFuncionModificaTexto[0]
    // const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    const items = words(textoStack, /[^-^+^*^/]+/g)
    const value = (items.length > 0) ? items[items.length - 1] : "0"

    console.log("Renderizacion de app", items)
    return (
        <main className="react-calculator">
            Calc App
            <Result value={value}  />
            <Numbers onClickNumber={
                number => {
                    setTextoStack(`${textoStack}${number}`)
            }} />
            
            <Functions 
                onContentClear={() => { setTextoStack('') } }
                onDelete={ () => {
                    if (textoStack.length > 0) {                        
                        const newTextoStack = textoStack.substring(0,textoStack.length - 1)
                        setTextoStack(newTextoStack)
                    }
                }}
            />
            
            
            <MathOperations 
                onClickOperation={ operacion  => {                    
                    setTextoStack(`${textoStack}${operacion}`)
                }}
                onClickEqual={ equal => {
                    // setTextoStack(`${textoStack}${equal}`)
                    setTextoStack(eval(textoStack).toString())                    
                }} 
            />
        </main>
    )
};

// EXPORTACION
export default App;
