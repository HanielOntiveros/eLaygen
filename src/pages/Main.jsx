import { useContext } from "react";
import { PageContext } from "../Context/PageContext";

export const Main = () => {
    const { webData, setCode, code } = useContext(PageContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const newData = [...formData].map(d => d[1])
        setCode(() => [...code, newData,])
    };

    const handleReset = () => {
        setCode([])
    }

    return (
        <section>
            <h3>Main Section</h3>
            <form onSubmit={handleSubmit} >
                <div className="row jusitfy-content-start">
                    {
                        webData.Main && Object.keys(webData.Main).map(key => (
                            <div key={key}>
                                <h5>{key}</h5>
                                <select name="components" id="pet-select" >
                                    <option value="">--Selecciona una opcion--</option>
                                    {webData.Main[key].map(item => (
                                        <option key={item.id} value={item.componente}>{item.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        ))}


                </div>
                <div className="my-3">
                    <button className='btn btn-outline-dark w-25 ' type="reset" onClick={handleReset}>Reset</button>

                    <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}
