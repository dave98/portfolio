import { useEffect, useRef } from "react"

const useCanvas = (draw, entities) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;


        const render  = () => {
            draw(context, entities);
            animationFrameId = window.requestAnimationFrame(render);
        }

        render();
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw])

    return canvasRef;
}

export default useCanvas;