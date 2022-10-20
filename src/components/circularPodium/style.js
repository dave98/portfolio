import styled from "@emotion/styled";

export const SvgContainer = styled.div(({height = 300, width = 400}) => ({
    position: "relative",
    height: height,
    width: width,
    backgroundColor: "transparent",
    transformStyle: "preserve-3d",
    transform: "rotateX(60deg)",
}))

export const SvgPodium = styled.svg({
    width: "100%",
    height: "100%",

    ".inner-circle ": {
        fill: "transparent",
        stroke: "white",
        strokeWidth: ".1%",
        transform: "translateY(-12px)",
        transition: "all 1s",
    },
    ".outer-circle-1":{
        stroke: "white",
        strokeWidth: "1%",
        fill: "rgba(255, 255, 255, 0.5)",
        transform: "translateY(-12px)",
        transition: "all 1s",
    },
    ".outer-circle-2":{
        stroke: "white",
        strokeWidth: ".3%",
        fill: "transparent",
        transform: "translateY(-9px)",
        transition: "all 1s",
    },
    ".outer-circle-3":{
        stroke: "white",
        strokeWidth: "2%",
        fill: "transparent",
        strokeDasharray: "15% 15%",
        transform: "translateY(-6px)",
        transition: "all 1s",
    },
    ".outer-circle-4":{
        stroke: "white",
        strokeWidth: ".4%",
        fill: "transparent",
        transform: "translateY(-3px)",
        transition: "all 1s",
    },
    ".outer-circle-5":{
        stroke: "white",
        strokeWidth: "3%",
        fill: "transparent",
        strokeDasharray: "5% 5% 5% 5% 20% 5%",
        transition: "all 1s",
    },
    ".inner-cross": {
        stroke: "white",
        strokeWidth: ".2",
        transform: "translateY(-12px)",
        transition: "all 1s",
    }
})