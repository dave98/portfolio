import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appear = keyframes({
    "0%": {
        width: "100%",
        height: "100%",
        inset: "0%",
    },
    "100%": {
        width: "90%",
        height: "90%",
        inset: "5%",
    }
})

export const Svg = styled.svg({
    position: "absolute",
    animationName: appear,
    animationIterationCount: 1,
    animationDuration: ".5s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-in-out",
    zIndex: "0",
})