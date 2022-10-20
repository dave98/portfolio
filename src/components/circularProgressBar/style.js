import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const beat = keyframes({
    "0%": {
        boxShadow: "0 0 20px white, 0 0 40px white"
    },
    "50%": {
        boxShadow: "0 0 40px white, 0 0 80px white"
    }, 
    "100%": {
        boxShadow: "0 0 20px white, 0 0 40px white"
    }
})

export const Card = styled.div({
    position: "relative",
    width: 125,
    height: 125,
})

export const Percent = styled.div(({num}) => ({
    width: "100%",
    height: "100%", 
    "svg": {
        position: "relative",
        width: "100%",
        height: "100%",
        transform: "rotate(270deg)",
        "circle": {
            width: "100%",
            height: "100%",
            fill: "transparent",
            strokeWidth: 2, 
            stroke: "#191919",
            transform: "translate(12px, 12px)",
       },
       "circle:nth-of-type(2)": {
            transitionDuration: "1s",
            transitionTimingFunction: "linear",
            stroke: "white",
            strokeDasharray: "313",
            strokeDashoffset: `calc(313 - (313 * ${num}) / 100)`,
        }
    }
}))

export const Dot = styled.div(({num}) => ({
    position: "absolute",
    inset: 36, 
    zIndex: 10,
    //animationName: dotAnimation(num),
    //animationDuration: "1s",
    //animationTimingFunction: "linear",
    //animationFillMode: "forwards",
    transform: `rotate(calc(3.6deg * ${num}))`,
    transitionDuration: "1s",
    transitionTimingFunction: "linear",

    "::before": {
        content: `""`,
        position: "absolute",
        top: -30, 
        left: "50%",
        transform: "translateX(-50%)",
        width: 15,
        height: 15,
        borderRadius: "50%",
        backgroundColor: "white",
        animationName: beat,
        animationDuration: "1s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
    },
}))

export const IconContainer = styled.div({
    position: "absolute",
    inset: "25%",
    zIndex: 10,
    "svg": {
        height: "100%",
        width: "100%",
    }
})