//@ts-nocheck

import React, { ChangeEvent } from 'react'
import { useState } from 'react'

interface User {
    name: string;
    email: string;
    password: string;
    category: string[];
    services: string[];
}

export default function CreateForm() {

    const [input, setInput] = useState<User>({
        name: "",
        email: "",
        password: "",
        category: [],
        services: []
    })

    function handleChange({target}: ChangeEvent<HTMLInputElement>){
        const {name, value} = target
        setInput({
            ...input,
            [name]: value
        })
    }
  return (
    <div>
        <div>createForm</div>

        <form>
            <div>
                <label>Nombre</label>
                <input
                    type= "text"
                    value = {input.name}
                    name = "name"
                    onChange={handleChange}
            />
            </div>
            <div>   
                <label>Correo electronico</label>
                <input
                    type= "email"
                    value = {input.name}
                    name = "email"
                    onChange={handleChange}

                />
            </div>
            <div>
                <label>Contraseña</label>
                <input
                    type= "password"
                    value = {input.name}
                    name = "password"
                    onChange={handleChange}

                />
            </div>
            <div>
                <label>Categoria</label>
                <input
                    type= "text"
                    value = {input.name}
                    name = "category"
                    onChange={handleChange}

                />
            </div>
            <div>
                <label>Servicio</label>
                <input
                    type= "text"
                    value = {input.name}
                    name = "services"
                    onChange={handleChange}

                />
            </div>
        </form>
            
    </div>
  )
}

