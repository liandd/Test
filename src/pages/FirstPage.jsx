import React from "react"
import { useState } from "react"

// useState
export const FirstPage = () => {
    const [valor, setValor] = useState (10)
    // const incrementar = () => {
    //     setValor (valor + 1)
    // }
    // const decrementar = () => {
    //     setValor (valor - 1)
    // }
    const modificarEstado = (num) => {
        setValor (Math.max (valor + num, 0))
    }
    const resetearEstado = () => {
        setValor (10);
    }
    return (
        <>
        <h1>contador</h1>
        <h1>{ valor }</h1>
        <button onClick={() => modificarEstado(+1) }>+1</button>
        <button onClick={() => modificarEstado(-1) }>-1</button>
        <button onClick={() => resetearEstado()}>reset</button>
        </>
    )
} 