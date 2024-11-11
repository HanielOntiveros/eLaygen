import { useContext } from "react";
import { PageContext } from "./Context/PageContext";

export const CodePreview = () => {
    const { code } = useContext(PageContext)

    return (
        <div className="">
            <div className="card">
                <p className="card-header h4  text-dark">Vista Previa</p>
                <div className="card-body ">
                    <div dangerouslySetInnerHTML={{ __html: code }} />
                </div>
            </div>
        </div>
    )
}
