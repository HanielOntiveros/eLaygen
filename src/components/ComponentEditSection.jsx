import { useState } from "react";


export const ComponentEditSection = ({ title, webData }) => {

    const [selectData, setSelectData] = useState("");
    console.log(selectData);


    return (
        <div className="d-flex flex-column w-auto gap-3">
            <h5>{title}</h5>
            <select
                name="components"
                id="pet-select"
                className="w-auto"
                onChange={(e) => setSelectData(e.target.value)}
                value={selectData}
            >

                <option value="">--Selecciona una opción--</option>
                {webData.Main[title].map(item => (
                    <option key={item.id} value={item.componente}>
                        {item.nombre}
                    </option>
                ))}
            </select>
            {webData.Main[title].map(item => (
                <div key={item.id}>
                    {item.Inputs && (
                        <>
                            {(selectData) == item.componente ?

                                Array.from({ length: item.Inputs }).map((_, index) => (
                                    <div key={index}>
                                        <label>Insert text for element #{index} </label>
                                        <input
                                            key={index}
                                            type="text" // Puedes personalizar el tipo según lo que necesites
                                            placeholder={`Input ${index + 1}`}
                                            onChange={(e) => {
                                                // Manejo de eventos si necesitas capturar cambios
                                                console.log(`Input ${index + 1} cambiado a:`, e.target.value);
                                            }}
                                        />
                                    </div>
                                ))
                                : null
                            }
                        </>
                    )}
                </div>
            ))}

        </div>
    )
}
{/* <div className="d-flex flex-column w-auto gap-2">
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
                <button onClick={handleAddTitle}>Add</button> */}
