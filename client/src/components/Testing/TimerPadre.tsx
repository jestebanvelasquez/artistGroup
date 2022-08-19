import { useState } from "react";
import Timer from "./Timer";

export default function TimerPadre() {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <>
            <span>Milisegundos {1000}</span>
            <br />
            <button className="bg-blue-500 px-3 py-1 rounded border-blue-800" onClick={() => setMilisegundos(1000)}>
                1000
            </button>

            <button className="bg-blue-500 px-3 py-1 rounded border-blue-800" onClick={() => setMilisegundos(2000)}>
                2000
            </button>

            <Timer milisegundos={milisegundos} />
        </>
    )
}