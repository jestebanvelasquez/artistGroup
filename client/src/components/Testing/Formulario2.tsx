import { useForm } from "../hooks/useForm"

export default function Formulario2() {

    const { postal, ciudad, inputs, handleChange } = useForm({
        postal: '',
        ciudad: ''
    });

    return (
        <form autoComplete="off">
            <div className="mb-5">
                <label>Código postal</label>
                <input type="text" className="text-black" name="postal" value={postal} onChange={handleChange} />
            </div>
            <div className="mb-5">
                <label>Ciudad</label>
                <input type="text" className="text-black" name="ciudad" value={ciudad} onChange={handleChange} />
            </div>

            <pre>{JSON.stringify(inputs)}</pre>
        </form>
    )
}