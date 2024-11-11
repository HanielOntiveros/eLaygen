import { useState } from "react"
import { PageContext } from "./PageContext"
import { useFetch } from "../hooks/useFetch";


export const PageProvider = ({ children }) => {
    const [code, setCode] = useState([])
    const { webData } = useFetch();
    return (
        < PageContext.Provider value={{ code, setCode, webData }} >
            {children}
        </PageContext.Provider >
    )
}