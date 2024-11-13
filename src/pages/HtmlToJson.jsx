import { useState } from 'react';

export const HtmlToJson = () => {
    const [inputHtml, setInputHtml] = useState('');
    const [outputJson, setOutputJson] = useState('');

    const handleInputChange = (e) => {
        setInputHtml(e.target.value);
    };

    const transformHtmlToJson = () => {
        let transformedHtml = inputHtml;

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
