import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    name: string;
    edad?: number;
}

export default function Formulario() {

    const { email, name, edad, inputs, handleChange } = useForm<FormData>({
        email: '',
        name: '',
        edad: 0
    });

    return (
        <form autoComplete="off">
            <div className="mb-5">
                <label>Email</label>
                <input type="email" className="text-black" name="email" value={email} onChange={handleChange} />
            </div>
            <div className="mb-5">
                <label>Name</label>
                <input type="text" className="text-black" name="name" value={name} onChange={handleChange} />
            </div>
            <div className="mb-5">
                <label>Edad</label>
                <input type="number" className="text-black" name="edad" value={edad} onChange={handleChange} />
            </div>

            <pre>{JSON.stringify(inputs)}</pre>
        </form>
    )
}