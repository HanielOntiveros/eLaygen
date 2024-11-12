// export const Form = ({ webData, setCode }) => {

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const formData = new FormData(form);
//         const newData = [...formData].map(d => d[1])
//         setCode(() => newData)
//     };

//     const handleReset = () => {
//         setCode([])
//     }

//     return (
//         <section className="container">
//             <form onSubmit={handleSubmit} >
//                 <div className="row jusitfy-content-start">

//                     {Object.keys(webData).map((data) => {
//                         const title = data;

//                         return (
//                             <div key={title} className="col-3">
//                                 <label>
//                                     <h3>{title}</h3>
//                                     <select name="components" id="pet-select" >
//                                         <option value="">--Selecciona una opcion--</option>
//                                         {
//                                             webData[title].map((item) => (
//                                                 <option key={item.id} value={item.componente}>{item.nombre}</option>
//                                             ))
//                                         }
//                                     </select>
//                                 </label>
//                                 <br />

//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="my-3">
//                     <button className='btn btn-outline-dark w-25 ' type="reset" onClick={handleReset}>Reset</button>

//                     <button className='btn btn-outline-dark w-25' type="submit">Submit</button>
//                 </div>
//             </form>
//         </section>
//     );
// };
import { useState } from 'react';

export const ConverterForm = () => {
    const [inputHtml, setInputHtml] = useState('');
    const [outputJson, setOutputJson] = useState('');

    const handleInputChange = (e) => {
        setInputHtml(e.target.value);
    };

    const transformHtmlToJson = () => {
        let transformedHtml = inputHtml;
        // Aquí puedes aplicar transformaciones necesarias usando expresiones regulares, por ejemplo:
        // Reemplazar rutas relativas por otras rutas
        // transformedHtml = transformedHtml.replace(/\.\/assets\/images\/logos\//g, './assets/logos/');
        // transformedHtml = transformedHtml.replace(/\.\/assets\/images\/icons\//g, '../src/assets/icons/');

        // // Modificar clases, atributos o enlaces según tu necesidad
        // transformedHtml = transformedHtml.replace(/href=""/g, 'href="https://www.facebook.com/"'); // Ejemplo
        // transformedHtml = transformedHtml.replace(/alt=""/g, 'alt="default-alt-text"');


        const jsonString = JSON.stringify(transformedHtml);

        setOutputJson(jsonString);
    };

    return (
        <div>
            <h2>HTML to JSON Transformer</h2>
            <textarea
                rows="10"
                value={inputHtml}
                onChange={handleInputChange}
                placeholder="Pega tu código HTML aquí"
                style={{ width: '100%' }}
            ></textarea>
            <button onClick={transformHtmlToJson}>Transformar a JSON</button>
            <h3>Output JSON Value:</h3>
            <pre>{outputJson}</pre>
        </div>
    );
};


