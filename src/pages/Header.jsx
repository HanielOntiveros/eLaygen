import { useContext } from "react"
import { PageContext } from "../Context/PageContext"
import { useForm } from "../hooks/useForm"

export const Header = () => {
    const { webData } = useContext(PageContext)
    const { handleReset, handleSubmit } = useForm()


    return (
        <section>
            <h3>Header Section</h3>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div className="row jusitfy-content-start">
                    <select name="components" id="pet-select" >
                        <option value="">--Selecciona una opcion--</option>
                        {
                            webData.Header && webData.Header.map((item) => (
                                <option key={item.id} value={item.componente}>{item.nombre}</option>
                            ))
                        }
                    </select>

                </div>
                <div className="my-3">
                    <button className='btn btn-outline-dark w-25 ' type="reset" onClick={(e) => handleReset(e)}>Reset</button>

                    <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}