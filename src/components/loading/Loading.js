import { useRef } from "react";
import "./loading.css";
import { useEffect } from "react";

function Loading() {

    const loading = useRef();

    useEffect(() => {
        window.addEventListener("load", () => {
            loading.current.classList.remove("show");
        })
    }, []);

    return (
        <div ref={loading} className='loading show'>
            <span className="loader"></span>
        </div>
    )
}

export default Loading;
