import { useRef } from "react";
import "./loading.css";

function Loading( { isLoading }) {

    const loading = useRef();

    if(isLoading === false) {
        loading.current.classList.add("hiding");
    }    

    return (
        <div ref={loading} className='loading'>
            <span className="loader"></span>
        </div>
    )
}

export default Loading;
