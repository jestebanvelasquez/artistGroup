import { useReducer } from "react"

const initialState = {
    contador: 0
}

type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }

const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return state;
    }
}

export default function ContadorRed() {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

    return (
        <>
            <h1>Contador: {contadorState.contador}</h1>
            <button className="bg-blue-500 px-3 py-1 rounded border-blue-800" onClick={() => dispatch({ type: 'incrementar' })}>+1</button>
            <button className="bg-red-500 px-3 py-1 rounded border-red-800" onClick={() => dispatch({ type: 'decrementar' })}>-1</button>
            <button className="bg-green-500 px-3 py-1 rounded border-green-800" onClick={() => dispatch({ type: 'custom', payload: 100 })}>100</button>
        </>
    )
}