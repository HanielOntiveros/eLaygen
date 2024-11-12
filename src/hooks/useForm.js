import { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const useForm = () => {
    const { setCode, code } = useContext(PageContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const newData = [...formData].map(d => d[1])
        setCode(() => [...code, newData])
    };

    const handleReset = () => {
        setCode([])
    }

    return {
        handleReset,
        handleSubmit
    }
}