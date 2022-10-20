import { useEffect } from "react";
import useCanvas from "./canvasHook";
import { Comet, Star } from "./stars";
import { Canvas } from "./style";

// Canvas drawing functions
const maxStars =200;
const maxComets = 10;
function animatedSky(ctx, entities){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "white"
    entities.forEach(e => {
        e.update(ctx);
    })
}

export default function AnimatedBackground({
    height,
    width,
    draw = animatedSky
}){
    let entities = [];
    for(let i = 0; i < maxStars; i++){
        entities.push(new Star( Math.random() * width, Math.random() * height, height, width ))
    }
    for(let i = 0; i < maxComets; i++ ){
        entities.push(new Comet(height, width))
    }

    const canvasRef = useCanvas(draw, entities);
    return (
        <Canvas ref={canvasRef} height={height} width={width} id={"bgCanvas"}/>
    )
}