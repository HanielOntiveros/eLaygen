import { useEffect, useState } from "react";


export const useFetch = () => {
    const [webData, setWebData] = useState('');

    useEffect(() => {

        fetch('../public/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then((data) => setWebData(data))
            .catch((error) => console.error('Hubo un problema con la petición Fetch:', error));
    }, [])

    return {
        webData,
        setWebData,
    }

}
