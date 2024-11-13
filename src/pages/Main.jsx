import { useContext, useState } from "react";
import { PageContext } from "../Context/PageContext";
import { useForm } from "../hooks/useForm";
import { ComponentEditSection } from "../components/ComponentEditSection";

export const Main = () => {
    const { webData } = useContext(PageContext)
    const { handleReset, handleSubmit } = useForm()


    // const [selectData, setSelectData] = useState("");
    const [inputText, setInputText] = useState("");
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [inputText3, setInputText3] = useState("");
    const [component, setComponent] = useState('');


    // const handleAddTitle = () => {
    //     if (selectData && inputText && inputText1 && inputText2) {
    //         setComponent(selectData.replace('${TitleSection}', inputText).replace('${InputText}', inputText1).replace('${Button}', inputText2).replace('${ImageAlt}', inputText3))
    //         console.log(component);

    //     } else {
    //         alert("Por favor selecciona una opción y escribe un título.");
    //     }

    // };

    return (
        <section>
            <h3>Main Section</h3>
            <form onSubmit={(e) => handleSubmit(e, component)} >
                <div className="row justify-content-start">
                    {webData.Main && Object.keys(webData.Main).map(key => (
                        <>
                            <ComponentEditSection
                                title={key}
                                webData={webData}
                            />
                        </>
                    ))}

                </div>
                <div className="my-3">
                    <button className='btn btn-outline-dark w-25 ' type="reset" onClick={(e) => handleReset(e)}>Reset</button>

                    <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
                </div>
            </form>
        </section >
    )
}
