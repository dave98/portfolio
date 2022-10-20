import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay){
    const  prevCallback = useRef(callback);

    useEffect(() => {
        prevCallback.current = callback
    }, [callback])

    useEffect(() => {
        if(delay === null){
            return;
        }   
        const id = setTimeout(() => {
            prevCallback.current();
        }, delay);

        return () => {
            clearTimeout(id);
        }
    }, [delay])
}