import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number;
}

export default function Timer({ milisegundos }: TimerArgs) {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}