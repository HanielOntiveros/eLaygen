import { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { useForm } from "../hooks/useForm";

export const Main = () => {
    const { webData } = useContext(PageContext)
    const { handleReset, handleSubmit } = useForm()

    return (
        <section>
            <h3>Main Section</h3>
            <form onSubmit={(e) => handleSubmit(e)} >
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
                    <button className='btn btn-outline-dark w-25 ' type="reset" onClick={(e) => handleReset(e)}>Reset</button>

                    <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}
