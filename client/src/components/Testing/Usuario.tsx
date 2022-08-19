import { useState } from "react"

interface User {
    uuid: string;
    name: string;
}

export default function Usuario() {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uuid: 'ABC123',
            name: 'Juan Sebastian'
        });
    }

    return (
        <div className="mt-5">
            <h2>Usuario: useState</h2>

            <button className="bg-blue-500 px-3 py-1 rounded border-blue-800" onClick={login}>Login</button>

            {
                (!user) ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    )
}