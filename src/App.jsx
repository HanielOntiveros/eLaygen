
// import { useState } from 'react';
// import { Form } from './components/Form';
// import { useFetch } from './hooks/useFetch';
// import { useUpdateEditor } from './hooks/useUpdateEditor';

import { Navigate, Route, Routes } from "react-router-dom";
import { SectionMenu } from "./components/SectionMenu";
import { Header, Main, Footer } from "./pages";
import { PageProvider } from "./Context/PageProvider";
import { CodePreview } from "./CodePreview";



export const App = () => {

  // const [code, setCode] = useState([])
  // const [copied, setCopied] = useState(false);

  // // const { editorRef } = useUpdateEditor()


  // const handleCopy = () => {
  //   setCopied(true)
  //   setTimeout(() => {
  //     setCopied(false)
  //   }, 1000)
  //   navigator.clipboard.writeText(code)
  // }


  return (
    <PageProvider >
      <h1 className="text-center mx-5 mt-5 h1">Easy Layout Generator</h1>
      <section className="my-5 mx-3  d-flex flex-column gap-5">
        <div>
          <SectionMenu />
          <Routes >
            <Route path='header' element={<Header />} />
            <Route path='main' element={<Main />} />
            <Route path='footer' element={<Footer />} />

            {/* <Route path="/*" element={<HomePage />} /> */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <CodePreview />
      </section>
    </PageProvider>
  );

}


// <Form webData={webData} setCode={setCode} code={code} />
// <div className="d-flex flex-column p-2 gap-3 ">

//   <div className="">
//     <div className="card">
//       <p className="card-header h4  text-dark">Vista Previa</p>
//       <div className="card-body ">
//         <div dangerouslySetInnerHTML={{ __html: code }} />
//       </div>
//     </div>
//   </div>

//   <div className="">
//     {copied &&
//       <div className='w-100 d-flex justify-content-end'>
//         <div className=" w-25 h-25" >
//           <h4 className="">Copiado!</h4>
//         </div>
//       </div>
//     }
//     <div className="card">
//       <div className='card-header d-flex justify-content-between'>
//         <p className=" h4  ">Codigo</p>
//         <button className='btn btn-outline-dark w-25 p-2 ' id="liveToastBtn" onClick={handleCopy} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Copiado">Copiar</button>
//       </div>
//       {/* <div className="card-body ">
//                       <div ref={editorRef} />
//                   </div> */}
//     </div>
//   </div>
// </div>

// <a className='btn btn-secondary w-auto p-2' href="/layout.rar" download="Layout.rar">Descargar</a>


