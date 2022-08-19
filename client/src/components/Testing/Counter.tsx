import { useState } from "react"

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const incrementar = (numero: number = 1): void => {
        setCounter(counter + numero);
    }


    return (
        <>
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br />
            <button type="button" className="bg-green-600" onClick={() => incrementar()}>+1</button>
            <button type="button" className="bg-green-600" onClick={() => incrementar(2)}>+2</button>
            <button type="button" className="bg-red-600" onClick={() => setCounter(0)}>Reset</button>
        </>
    )
}