import Counter from "./Counter";
import Usuario from "./Usuario";

import TimerPadre from "./TimerPadre";
import ContadorRed from "./ContadorRed";
import Formulario from "./Formulario";
import Formulario2 from "./Formulario2";

export default function Example() {
  return (
    <div className="container bg-gray-900 text-white w-full h-full">
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <hr />
      <Usuario />
      <hr />
      <h1>UseEffect - useRef</h1>
      <TimerPadre />
      <br />
      <hr />
      <h1>useReducer</h1>
      <ContadorRed />
      <br />
      <hr />
      <h1>Custom Hooks</h1>
      <Formulario />
      <br />
      <Formulario2 />
    </div>
  )
}
