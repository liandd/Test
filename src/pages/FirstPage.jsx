import {useContador} from "../hooks/useContador"
//useState
//REFACTOR
export const FirstPage = () => {

    const {valor, modificarEstado, increaseBy, dicreaseBy, reset} = useContador(200,10,10)
    return (
        <>
        <h1>Contador Mejorado</h1>
        <hr/>
        <h1>{valor}</h1>
        <button onClick={increaseBy}> Incrementar </button> <br />
        <button onClick={dicreaseBy}> Decrementar </button> <br />
        <button onClick={reset}> Reset </button> <br />
        </>
    )
}
