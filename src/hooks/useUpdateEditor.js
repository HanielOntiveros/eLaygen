import { html } from '@codemirror/lang-html';
import { EditorView, basicSetup } from 'codemirror';
import { useEffect, useRef } from 'react';

export const useUpdateEditor = (code, setCode) => {
    const editorRef = useRef();



    useEffect(() => {
        const updateListener = EditorView.updateListener.of((v) => {
            if (v.docChanged) {
                const newCode = v.state.doc.toString();
                setCode(newCode); // Actualiza el estado con el código nuevo
            }
        });

        const view = new EditorView({
            doc: code,
            extensions: [basicSetup, html(), updateListener],
            parent: editorRef.current,
        });

        return () => {
            view.destroy();
        };
    }, [code]);

    return {
        editorRef
    }
}
