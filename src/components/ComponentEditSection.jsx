import { useState } from "react";

export const ComponentEditSection = ({ title, webData }) => {
    const [selectData, setSelectData] = useState("");
    const [inputValues, setInputValues] = useState([]);

    // Función para manejar el cambio de cada input
    const handleInputChange = (index, value) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    // Función para capturar los datos al hacer clic
    const captureData = () => {
        // Asume que selectData es la cadena donde deseas reemplazar los placeholders
        let replacedString = selectData;

        inputValues.forEach((value, index) => {
            const placeholder = new RegExp(`\\$\\{Input${index + 1}\\}`, 'g');
            replacedString = replacedString.replace(placeholder, value);
        });

        // Opcional: Muestra el resultado reemplazado
        console.log('Cadena con datos capturados:', replacedString);
    };

    // Actualiza los inputValues cuando seleccionas un componente diferente
    const handleSelectChange = (value, itemInputs) => {
        setSelectData(value); // Asume que 'value' es una cadena que contiene placeholders
        if (itemInputs) {
            // Crea un array del tamaño adecuado si `itemInputs` existe
            setInputValues(Array(itemInputs).fill(''));
        }
    };

    return (
        <div className="d-flex flex-column w-auto gap-3">
            <h5>{title}</h5>
            <select
                name="components"
                id="pet-select"
                className="w-auto"
                onChange={(e) => {
                    const selectedComponent = webData.Main[title].find(
                        (item) => item.componente === e.target.value
                    );
                    handleSelectChange(e.target.value, selectedComponent ? selectedComponent.Inputs : 0);
                }}
                value={selectData}
            >
                <option value="">--Selecciona una opción--</option>
                {webData.Main[title].map((item) => (
                    <option key={item.id} value={item.componente}>
                        {item.nombre}
                    </option>
                ))}
            </select>
            {webData.Main[title].map((item) => (
                <div key={item.id}>
                    {item.Inputs && (
                        <>
                            {selectData === item.componente &&
                                Array.from({ length: item.Inputs }).map((_, index) => (
                                    <div key={index}>
                                        <label>Insert text for element #{index + 1}</label>
                                        <input
                                            type="text"
                                            placeholder={`Input ${index + 1}`}
                                            value={inputValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                        />
                                    </div>
                                ))
                            }
                            {selectData === item.componente && (
                                <button onClick={captureData}>Capturar Datos</button>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};


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
