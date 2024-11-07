export const Form = ({ webData, setCode }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const newData = [...formData].map(d => d[1])
        setCode(() => newData)
    };

    const handleReset = () => {
        setCode([])
    }

    return (
        <section className="container">
            <form onSubmit={handleSubmit} >
                <div className="row jusitfy-content-start">

                    {Object.keys(webData).map((data) => {
                        const title = data;

                        return (
                            <div key={title} className="col-3">
                                <label>
                                    <h3>{title}</h3>
                                    <select name="components" id="pet-select" >
                                        <option value="">--Selecciona una opcion--</option>
                                        {
                                            webData[title].map((item) => (
                                                <option key={item.id} value={item.componente}>{item.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </label>
                                <br />

                            </div>
                        );
                    })}
                </div>
                <div className="my-3">
                    <button className='btn btn-outline-dark w-25 ' type="reset" onClick={handleReset}>Reset</button>

                    <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
};

