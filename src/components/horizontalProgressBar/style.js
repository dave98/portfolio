import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Progress between 0-100
function dash(progress){ 
    return keyframes({
        "to": {
            strokeDashoffset: 100 - progress,
        }
    })
}

export const Container = styled.div({
    position: "relative",
    height: "10%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
})

export const SvgCircle = styled.svg({
    width: "10%",
    height: "auto",
    "circle:nth-of-type(1)": {
        stroke: "white",
        strokeWidth: "3%",
        strokeDasharray: "50% 50%",
    },
    "circle:nth-of-type(2)": {
        stroke: "white",
        strokeWidth: "5%",
        strokeDasharray: "65% 35%",
        strokeDashoffset: "65%",
    }
})

export const SvgBar = styled.svg(({progress = 90}) => ({
    width: "90%",
    height: "80%",
    vectorEffect: "non-scaling-stroke",
    "polyline": {
        stroke: "white",
        strokeWidth: ".6%",
        fill: "none"
    },
    "line": {
        stroke: "white",
        strokeWidth: ".2%",
        "&.filler-background": {
            strokeWidth: "5%",
            opacity: .2
        },
        "&.filler": {
            strokeWidth: "5%",
            animationName: dash(progress),
            animationDuration: "1.5s",
            animationTimingFunction: "ease-in-out",
            animationFillMode: "forwards",

        },
        "&.border1": {
            strokeWidth: "1%",
            strokeDasharray: "5% 2% 5% 2% 5% 20% 20%",
            strokeDashoffset: "10%",
            strokeLinecap: "round"
        },
        "&.border2":{
            strokeWidth: "1%",
            strokeDasharray: "1% 1%",
        }
    }
}))

export const Icon = styled.div({
    position: "absolute",
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "svg": {
        width: "60%",
        height: "60%",
    }
})