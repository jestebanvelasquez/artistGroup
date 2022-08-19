import { ChangeEvent, useState } from "react";

/* export function useForm<T>(initState: T) { */
export const useForm = <T extends Object>(initState: T) => {

    const [inputs, setInputs] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setInputs({
            ...inputs,
            [name]: value
        });
    }

    return {
        inputs,
        handleChange,
        ...inputs
    }
}