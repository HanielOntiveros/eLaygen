import { useContext, useState } from "react";
import { PageContext } from "../Context/PageContext";
import { useForm } from "../hooks/useForm";

export const Main = () => {
    const { webData } = useContext(PageContext)
    const { handleReset, handleSubmit } = useForm()


    const [selectData, setSelectData] = useState("");
    const [inputText, setInputText] = useState("");
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [inputText3, setInputText3] = useState("");
    const [component, setComponent] = useState('');


    const handleAddTitle = () => {
        if (selectData && inputText && inputText1 && inputText2) {


            setComponent(selectData.replace('${TitleSection}', inputText).replace('${InputText}', inputText1).replace('${Button}', inputText2).replace('${ImageAlt}', inputText3))

            console.log(component);




        } else {
            alert("Por favor selecciona una opción y escribe un título.");
        }

    };

    return (
        <section>
            <h3>Main Section</h3>
            <form onSubmit={(e) => handleSubmit(e, component)} >
                <div className="row justify-content-start">
                    {webData.Main && Object.keys(webData.Main).map(key => (
                        <div key={key} className="d-flex flex-column w-auto gap-3">
                            <h5>{key}</h5>
                            <select
                                name="components"
                                id="pet-select"
                                className="w-auto"
                                onChange={(e) => setSelectData(e.target.value)}
                                value={selectData}
                            >
                                <option value="">--Selecciona una opción--</option>
                                {webData.Main[key].map(item => (
                                    <option key={item.id} value={item.componente}>
                                        {item.nombre}
                                    </option>
                                ))}
                            </select>
                            <div className="d-flex flex-column w-auto gap-2">
                                <label>Insert Title Text</label>
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                />
                                <label>Insert Subtitle Text</label>
                                <input
                                    type="text"
                                    value={inputText1}
                                    onChange={(e) => setInputText1(e.target.value)}
                                />
                                <label>Insert Button Text</label>
                                <input
                                    type="text"
                                    value={inputText2}
                                    onChange={(e) => setInputText2(e.target.value)}
                                />
                                <label>Insert Alt Text</label>
                                <input
                                    type="text"
                                    value={inputText3}
                                    onChange={(e) => setInputText3(e.target.value)}
                                />
                            </div>
                            <button onClick={handleAddTitle}>Add</button>
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
