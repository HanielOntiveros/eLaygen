import { useContext } from "react";
import { PageContext } from "../Context/PageContext";


export const Footer = () => {
    const { webData, setCode, code } = useContext(PageContext)


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

    return (
        <section>
            <h3>Footer Section</h3>
            <form onSubmit={handleSubmit} >
                <div className="row jusitfy-content-start">
                    <select name="components" id="pet-select" >
                        <option value="">--Selecciona una opcion--</option>
                        {
                            webData.Footer.map((item) => (
                                <option key={item.id} value={item.componente}>{item.nombre}</option>
                            ))
                        }
                    </select>

                </div>
                <div className="my-3">
                    <button className='btn btn-outline-dark w-25 ' type="reset" onClick={handleReset}>Reset</button>

                    <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}
