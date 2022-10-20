import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const permaRotation = keyframes({
    "0%": {
        transform: "rotateY(0deg)",
    },
    "50%": {
        transform: "rotateY(90deg)",
    },
    "100%": {
        transform: "rotateY(0deg)",
    }
})


export const Container = styled.div(({height = "100%", width="100%"}) => ({
    position: "relative",
    backgroundColor: "transparent ",
    zIndex: 10,
    height: height,
    width: width,
    transformStyle: "preserve-3d",
    animationName: permaRotation,
    animationDuration: "10s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
}))

export const SvgMacro = styled.svg(({zOver}) => ({
    height: "100%",
    width: "100%",
    position: "absolute",
    inset: 0,
    transformStyle: "preserve-3d",
    transform: zOver ? `translateZ(${zOver}px)` : null,
    ".macro": {
        
        fill: "rgba(255, 255, 255, .9)",
    },
}))

export const SvgWindow = styled.svg({
    height: "100%",
    width: "100%",
    position: "absolute",  
    inset: 0,
    ".inner-glass": {
        stroke: "white",
        strokeWidth: 1,
        fill: "rgba(255, 255, 255, 0.1)",
        transition: "all 1s",
    }
})