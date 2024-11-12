import { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const useForm = () => {
    const { setCode, code } = useContext(PageContext)
    const handleSubmit = (event, component) => {
        event.preventDefault();
        // const form = event.target;
        // const formData = new FormData(form);
        // const newData = [...formData].map(d => d[1])
        // console.log(component);

        setCode(() => [...code, component])
    };

    const handleReset = () => {
        setCode([])
    }

    return {
        handleReset,
        handleSubmit
    }
}